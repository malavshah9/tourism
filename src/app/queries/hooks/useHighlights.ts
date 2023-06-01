"use client";

import { useQuery } from "react-query";
import { getAllHighlights } from "../services/HighlightService";

export const useHighlights = () => useQuery("highlights", getAllHighlights);
