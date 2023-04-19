import { Card, Image } from "antd";

type Props = {
  imgSrc: string;
  titleName: string;
};

const CardImageWithPreview = ({ imgSrc, titleName }: Props) => {
  return (
    <Card
      cover={
        <Image
          alt="image"
          src={imgSrc}
          className="w-full"
          preview={{
            mask: (
              <p className="text-xl p-10 sm:p-0 capitalize text-center font-semibold">
                {titleName}
              </p>
            ),
          }}
        />
      }
      style={{ width: 400 }}
      bodyStyle={{ padding: 0 }}
    />
  );
};

export default CardImageWithPreview;
