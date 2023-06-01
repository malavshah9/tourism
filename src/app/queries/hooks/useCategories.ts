import { useQuery } from "react-query";
import { getAllCategories } from "../services/CategoryService";

export const useCategories = () => useQuery("categories", getAllCategories);
