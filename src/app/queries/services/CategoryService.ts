import { V1 } from "@/app/util/constant";
import { HTTP } from "../../util/HTTP";
import { getCategories } from "../models/CategoryModel";
import { Category } from "../types/category";

export function getAllCategories() {
  return HTTP.get<Category[]>(`${V1}categories`).then((res) =>
    getCategories(res.data)
  );
}
