import React from "react";
import Image from "next/image";
import { getImage } from "@/libs/helpers";

function Assessment({ files }: any) {
  return (
    <div
      style={{
        display: "grid",
        columnGap: "16px",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {Object.keys(files).map((x, i) => {
        return (
          <a
            href={getImage(files[x])}
            target="_blank"
            style={{ cursor: "pointer", border: "1px solid #eee" }}
            key={i}
          >
            <Image
              alt="profile"
              objectFit="cover"
              width={406}
              quality={100}
              style={{ width: "100%", objectFit: "contain" }}
              // className={styles.photo}
              height={381}
              src={getImage(files[x])}
            />
          </a>
        );
      })}
    </div>
  );
}

export default Assessment;
