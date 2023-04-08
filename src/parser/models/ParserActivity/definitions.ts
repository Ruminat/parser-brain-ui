import { TParser } from "../Parser/definitions";

export type TParserAction = "started-posting" | "downloaded-images" | "parsed-tags" | "uploaded-post" | "finished";

export type TParserActivity = {
  parser: TParser;
  action: TParserAction;
  time: number;
};
