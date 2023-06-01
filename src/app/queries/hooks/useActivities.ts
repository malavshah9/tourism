import { useQuery } from "react-query";
import { getAllActivities } from "../services/ActivityService";
import { ActivityType } from "../types/activity";

export const useActivities = (type: ActivityType) =>
  useQuery([`cat-${type}`], () => getAllActivities(type));
