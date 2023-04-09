import ImageView from "@/component/ImageView";
import API from "@/utils/API";
import axios from "axios";
import Add from "./add";
import Delete from "./delete";
import Edit from "./edit";

type Sertifikat = {
  id: number;
  title: string;
  image: string;
};

async function getSertifikat() {
  const res = await axios.get(API.API_URL + "/sertifikat");
  return res.data.data;
}

export default async function Home() {
  const data: Sertifikat[] = await getSertifikat();

  return (
    <>
      <h1>Sertifikat Page</h1>
      <Add />
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Image</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((sertifikat, index) => (
              <tr key={sertifikat.id}>
                <td>{index + 1}</td>
                <td>{sertifikat.title}</td>
                <td>
                  <ImageView file={sertifikat.image} path="sertifikat" />
                </td>
                <td>
                  <div className="flex">
                    <Edit {...sertifikat} />
                    <Delete {...sertifikat} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
