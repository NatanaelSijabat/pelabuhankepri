"use client";
import * as React from "react";
import API from "@/utils/API";
import { Input } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function Add() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [preview, setPreview] = React.useState("");

  const router = useRouter();

  const loadImage = (files: any) => {
    const image = files.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axios.post(API.API_URL + "/galeri", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      setTitle("");
      setImage("");
      router.refresh();
      setOpen(!open);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange() {
    setOpen(!open);
  }

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        <AddOutlinedIcon />
        <span>Add New</span>
      </button>
      <input
        type="checkbox"
        checked={open}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Form Add</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div>
                <div className="form-control">
                  <label className="label font-bold">Title</label>
                  <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input w-full input-bordered"
                    placeholder="Title"
                    name="title"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">Image</label>
                  <Input
                    type="file"
                    placeholder="Select Image"
                    accept="image/*"
                    onChange={loadImage}
                    required
                  />
                </div>
              </div>
              <div className="p-10">
                {preview ? (
                  <img src={preview} alt="Preview image" width={150} />
                ) : null}
              </div>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
