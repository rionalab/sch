import React from "react";
import { Avatar as AvatarAntd, Flex, Space, Table as TableAntd } from "antd";

interface Props {
  image?: string;
  title?: string;
  hover?: boolean;
}

function Avatar(props: Props) {
  const { hover = false, image, title = "" } = props;

  if (image) {
    return <AvatarAntd src={<img src={image} alt="avatar" />} />;
  }

  return (
    <Flex align="center" gap={8}>
      <AvatarAntd className="textUppercase ">
        {(title || "")
          .trim()
          .split(" ")
          .slice(0, 2)

          .map((t) => t[0])}
      </AvatarAntd>
      <span className={`textCapitalize ${hover ? "textLink" : ""}`}>
        {title}
      </span>
    </Flex>
  );
}

export default Avatar;
