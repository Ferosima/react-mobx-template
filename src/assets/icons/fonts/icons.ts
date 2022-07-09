export type IconsId =
  | "done";

export type IconsKey =
  | "Done";

export enum Icons {
  Done = "done",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Done]: "61697",
};
