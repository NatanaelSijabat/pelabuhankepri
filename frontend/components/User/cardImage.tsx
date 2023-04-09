import { Card } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

type Props = {
  imgName: string;
  titleName: string;
  href: string;
};

const CardImage = ({ imgName, titleName, href }: Props) => {
  return (
    <Link href={href}>
      <Card
        style={{ width: 300 }}
        cover={
          <Image
            alt="image"
            src={imgName}
            width={200}
            height={100}
            quality={100}
          />
        }
      >
        <Meta title={<p className="text-sm">{titleName}</p>} />
      </Card>
    </Link>
  );
};

export default CardImage;
