import { V1 } from "@/app/util/constant";
import { HTTP } from "../../util/HTTP";
import { getHeighlights } from "../models/HeighlightModel";
import { Highlight } from "../types/highlight";

export function getAllHighlights() {
  return HTTP.get<Highlight[]>(`${V1}highlights`).then((res) =>
    getHeighlights(res.data)
  );
}
