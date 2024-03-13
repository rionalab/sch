import React from "react";
import { Avatar as AvatarAntd, Flex } from "antd";

interface Props {
  image?: string;
  title?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Avatar(props: Props) {
  const { hover = false, onClick = undefined, image, title = "" } = props;

  if (image) {
    return (
      <div
        onClick={() => {
          onClick?.();
        }}
      >
        <AvatarAntd
          size={"small"}
          style={{ marginRight: 8 }}
          // eslint-disable-next-line @next/next/no-img-element
          src={<img src={image} alt="avatar" />}
        />
        <span className={`textCapitalize ${hover ? "textLink" : ""}`}>
          {title}
        </span>
      </div>
    );
  }

  return (
    <Flex
      onClick={() => {
        onClick?.();
      }}
      align="center"
      gap={8}
    >
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
