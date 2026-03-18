import { ExtensionWebExports } from "@moonlight-mod/types";

// https://moonlight-mod.github.io/ext-dev/webpack/#patching
export const patches: ExtensionWebExports["patches"] = [
  {
    find: "data-username-has-gradient",
    replace: {
      // TODO: patch where setting it to next to name will work
      match: /"(?:dot|username)"===\i/g,
      replacement: "true"
    }
  }
];
