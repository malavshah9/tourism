import { V1 } from "@/app/util/constant";
import { HTTP } from "../../util/HTTP";
import { getActivities } from "../models/ActivityModel";
import { Activity, ActivityType } from "../types/activity";

export function getAllActivities(type: ActivityType) {
  return HTTP.get<Activity[]>(`${V1}activities/${type}`).then((res) =>
    getActivities(res.data)
  );
}
