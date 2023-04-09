import API from "@/utils/API";
import Add from "./add";
import ImageView from "@/component/ImageView";
import Edit from "./edit";
import Delete from "./delete";
import axios from "axios";

type Galeri = {
  id: number;
  title: string;
  image: string;
};

async function getGaleri() {
  const res = await axios.get(API.API_URL + "/galeri");
  return res.data.data;
}

export default async function Home() {
  const data: Galeri[] = await getGaleri();

  return (
    <>
      <h1 className="mb-4">Data Galeri</h1>
      <Add />
      <div>
        <table className="table w-full">
          <thead className="">
            <tr>
              <td>No</td>
              <td>Title</td>
              <td>Image</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((galeri, index) => (
              <tr key={galeri.id}>
                <td>{index + 1}</td>
                <td>{galeri.title}</td>
                <td>
                  <ImageView file={galeri.image} path="galeri" />
                </td>
                <td>
                  <div className="flex">
                    <Edit {...galeri} />
                    <Delete {...galeri} />
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
