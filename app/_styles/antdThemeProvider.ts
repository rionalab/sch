import { type ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontFamily: "var('--font-inter')",
    fontSize: 13,
    colorText: "#333",
  },
  components: {
    Descriptions: {
      itemPaddingBottom: 0,
    },
  },
};
