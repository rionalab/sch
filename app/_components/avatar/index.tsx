import React from "react";
import { Avatar as AvatarAntd, Flex } from "antd";

interface Props {
  image?: string;
  title?: string;
  hover?: boolean;
}

export function Avatar(props: Props) {
  const { hover = false, image, title = "" } = props;

  if (image) {
    return (
      <>
        <AvatarAntd
          size={"small"}
          style={{ marginRight: 8 }}
          // eslint-disable-next-line @next/next/no-img-element
          src={<img src={image} alt="avatar" />}
        />
        <span className={`textCapitalize ${hover ? "textLink" : ""}`}>
          {title}
        </span>
      </>
    );
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
