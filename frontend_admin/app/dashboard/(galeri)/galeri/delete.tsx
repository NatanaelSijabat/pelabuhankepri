"use client";
import API from "@/utils/API";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  image: string;
};

export default function Delete(galeri: Props) {
  const [open, setOpen] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleDelete(galeriId: number) {
    setIsMutating(true);

    await fetch(API.API_URL + `/galeri/${galeriId}`, {
      method: "DELETE",
    });

    setIsMutating(false);
    router.refresh();
    setOpen(false);
  }

  function handleChange() {
    setOpen(!open);
  }

  return (
    <div>
      <button onClick={handleChange}>
        <DeleteOutlineOutlinedIcon />
      </button>
      <input
        type="checkbox"
        checked={open}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are sure to delete {galeri.title} ?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(galeri.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
