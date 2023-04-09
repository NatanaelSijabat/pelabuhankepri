import APIConfig from "../utils/APIConfig";

type ImageViewProps = {
  file: string;
  path: string;
};

export default function ImageView({ file, path }: ImageViewProps) {
  return file ? (
    <>
      <img
        src={APIConfig.ImagePath + `/${path}/${file}`}
        alt="image"
        width={100}
        height={100}
      />
    </>
  ) : null;
}
