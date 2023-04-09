"use client";
import API from "@/utils/API";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Input } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

type Props = {
  id: number;
  title: string;
  image: string;
};
export default function Edit(sertifikat: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const router = useRouter();

  const getOneById = async () => {
    const res = await axios.get(API.API_URL + `/sertifikat/${sertifikat.id}`);
    setTitle(res.data.data.title);
    setImage(res.data.data.image);
  };

  useEffect(() => {
    getOneById();
  }, []);

  const loadImage = (files: any) => {
    const image = files.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  async function handleUpdate(e: React.SyntheticEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axios.put(API.API_URL + `/sertifikat/${sertifikat.id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

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
      <button onClick={handleChange}>
        <ModeEditOutlineOutlinedIcon />
      </button>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={open}
        onChange={handleChange}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Form Edit {sertifikat.title}</h3>
          <form onSubmit={handleUpdate}>
            <div className="flex">
              <div>
                <div className="form-control">
                  <label className="label font-bold">Title</label>
                  <Input
                    type="text"
                    className="input w-full input-bordered"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">Image</label>
                  <Input
                    type="file"
                    placeholder="Select Image"
                    accept="image/*"
                    onChange={loadImage}
                  />
                </div>
              </div>
              <div className="p-10">
                {preview ? (
                  <img src={preview} alt="Preview image" width={150} />
                ) : (
                  ""
                )}
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
