import React from "react";
import styles from "./styles.module.scss";

interface Props {
  img?: React.ReactElement;
  title?: string;
  description?: string;
  description2?: string;
}

function DashboardSummary({
  img,
  title = "",
  description2 = "",
  description = "",
}: Props) {
  return (
    <div className={styles.container}>
      <div>
        {title && <p>{title}</p>}
        {description && <p>{description}</p>}
        {description2 && <p>{description2}</p>}
      </div>
      {img && img}
    </div>
  );
}

export default DashboardSummary;
