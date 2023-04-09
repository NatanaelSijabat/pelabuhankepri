import { Card, Image } from "antd";

const { Meta } = Card;

type Props = {
  imgSrc: string;
  titleName: string;
  deskripsiName?: string;
};

const CardImageWithPreview = ({ imgSrc, titleName, deskripsiName }: Props) => {
  return (
    <Card
      className="w-full"
      cover={<Image alt="image" src={imgSrc} className="h-fit w-10" />}
    >
      <Meta
        title={<p className="capitalize">{titleName}</p>}
        description={<p className="capitalize">{deskripsiName}</p>}
      />
    </Card>
  );
};

export default CardImageWithPreview;
