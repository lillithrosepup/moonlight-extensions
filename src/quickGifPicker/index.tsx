import { ExtensionWebExports } from "@moonlight-mod/types";

export const patches: ExtensionWebExports["patches"] = [
  {
    find: "renderHeaderContent",
    replace: {
      match: /(?<=state={resultType:)null/,
      replacement: 'require("quickGifPicker_config").getDefaultCategory()'
    }
  }
];

export const webpackModules: ExtensionWebExports["webpackModules"] = {
  config: {}
};
