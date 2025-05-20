import { ThemeConfig } from "antd";
import { AliasToken } from "antd/es/theme/interface";

// Base tokens that are shared between light and dark modes
const baseTokens: Partial<AliasToken> = {
  borderRadius: 6,
  wireframe: false,
};

// Light mode theme presets
export const lightThemes: Record<string, ThemeConfig> = {
  Blue: {
    token: {
      ...baseTokens,
      colorPrimary: "#1890ff",
      colorInfo: "#1890ff",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "#000000e0",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#f0f0f0",
    },
    components: {
      Menu: {
        itemSelectedBg: "#e6f7ff",
        itemHoverBg: "#f5f5f5",
      },
      Table: {
        headerBg: "#fafafa",
        rowHoverBg: "#fafafa",
      },
      Card: {
        headerBg: "#fafafa",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Purple: {
    token: {
      ...baseTokens,
      colorPrimary: "#722ed1",
      colorInfo: "#722ed1",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "#000000e0",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#f0f0f0",
    },
    components: {
      Menu: {
        itemSelectedBg: "#f9f0ff",
        itemHoverBg: "#f5f5f5",
      },
      Table: {
        headerBg: "#fafafa",
        rowHoverBg: "#fafafa",
      },
      Card: {
        headerBg: "#fafafa",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Magenta: {
    token: {
      ...baseTokens,
      colorPrimary: "#eb2f96",
      colorInfo: "#eb2f96",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "#000000e0",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#f0f0f0",
    },
    components: {
      Menu: {
        itemSelectedBg: "#fff0f6",
        itemHoverBg: "#f5f5f5",
      },
      Table: {
        headerBg: "#fafafa",
        rowHoverBg: "#fafafa",
      },
      Card: {
        headerBg: "#fafafa",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Red: {
    token: {
      ...baseTokens,
      colorPrimary: "#f5222d",
      colorInfo: "#f5222d",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "#000000e0",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#f0f0f0",
    },
    components: {
      Menu: {
        itemSelectedBg: "#fff1f0",
        itemHoverBg: "#f5f5f5",
      },
      Table: {
        headerBg: "#fafafa",
        rowHoverBg: "#fafafa",
      },
      Card: {
        headerBg: "#fafafa",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Orange: {
    token: {
      ...baseTokens,
      colorPrimary: "#fa8c16",
      colorInfo: "#fa8c16",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "#000000e0",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#f0f0f0",
    },
    components: {
      Menu: {
        itemSelectedBg: "#fff7e6",
        itemHoverBg: "#f5f5f5",
      },
      Table: {
        headerBg: "#fafafa",
        rowHoverBg: "#fafafa",
      },
      Card: {
        headerBg: "#fafafa",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Yellow: {
    token: {
      ...baseTokens,
      colorPrimary: "#fadb14",
      colorInfo: "#fadb14",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "#000000e0",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#f0f0f0",
    },
    components: {
      Menu: {
        itemSelectedBg: "#feffe6",
        itemHoverBg: "#f5f5f5",
      },
      Table: {
        headerBg: "#fafafa",
        rowHoverBg: "#fafafa",
      },
      Card: {
        headerBg: "#fafafa",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
};

// Dark mode theme presets
export const darkThemes: Record<string, ThemeConfig> = {
  Blue: {
    token: {
      ...baseTokens,
      colorPrimary: "#1890ff",
      colorInfo: "#1890ff",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "rgba(255, 255, 255, 0.85)",
      colorBgContainer: "#141414",
      colorBorderSecondary: "#303030",
    },
    components: {
      Menu: {
        itemSelectedBg: "#111d2c",
        itemHoverBg: "#1f1f1f",
      },
      Table: {
        headerBg: "#1f1f1f",
        rowHoverBg: "#1f1f1f",
      },
      Card: {
        headerBg: "#1f1f1f",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Purple: {
    token: {
      ...baseTokens,
      colorPrimary: "#722ed1",
      colorInfo: "#722ed1",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "rgba(255, 255, 255, 0.85)",
      colorBgContainer: "#141414",
      colorBorderSecondary: "#303030",
    },
    components: {
      Menu: {
        itemSelectedBg: "#120338",
        itemHoverBg: "#1f1f1f",
      },
      Table: {
        headerBg: "#1f1f1f",
        rowHoverBg: "#1f1f1f",
      },
      Card: {
        headerBg: "#1f1f1f",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Magenta: {
    token: {
      ...baseTokens,
      colorPrimary: "#eb2f96",
      colorInfo: "#eb2f96",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "rgba(255, 255, 255, 0.85)",
      colorBgContainer: "#141414",
      colorBorderSecondary: "#303030",
    },
    components: {
      Menu: {
        itemSelectedBg: "#2a0f29",
        itemHoverBg: "#1f1f1f",
      },
      Table: {
        headerBg: "#1f1f1f",
        rowHoverBg: "#1f1f1f",
      },
      Card: {
        headerBg: "#1f1f1f",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Red: {
    token: {
      ...baseTokens,
      colorPrimary: "#f5222d",
      colorInfo: "#f5222d",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "rgba(255, 255, 255, 0.85)",
      colorBgContainer: "#141414",
      colorBorderSecondary: "#303030",
    },
    components: {
      Menu: {
        itemSelectedBg: "#2a1215",
        itemHoverBg: "#1f1f1f",
      },
      Table: {
        headerBg: "#1f1f1f",
        rowHoverBg: "#1f1f1f",
      },
      Card: {
        headerBg: "#1f1f1f",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Orange: {
    token: {
      ...baseTokens,
      colorPrimary: "#fa8c16",
      colorInfo: "#fa8c16",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "rgba(255, 255, 255, 0.85)",
      colorBgContainer: "#141414",
      colorBorderSecondary: "#303030",
    },
    components: {
      Menu: {
        itemSelectedBg: "#2b1d11",
        itemHoverBg: "#1f1f1f",
      },
      Table: {
        headerBg: "#1f1f1f",
        rowHoverBg: "#1f1f1f",
      },
      Card: {
        headerBg: "#1f1f1f",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
  Yellow: {
    token: {
      ...baseTokens,
      colorPrimary: "#fadb14",
      colorInfo: "#fadb14",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorText: "rgba(255, 255, 255, 0.85)",
      colorBgContainer: "#141414",
      colorBorderSecondary: "#303030",
    },
    components: {
      Menu: {
        itemSelectedBg: "#2b2611",
        itemHoverBg: "#1f1f1f",
      },
      Table: {
        headerBg: "#1f1f1f",
        rowHoverBg: "#1f1f1f",
      },
      Card: {
        headerBg: "#1f1f1f",
      },
      Button: {
        primaryShadow: "none",
      },
    },
  },
};
