export type Activity = {
  name: string;
  description: string;
  image: string;
  activities: IndActivity[];
};

export type IndActivity = {
  name: string;
};

export type ActivityType = "Surfing" | "Traditional Festivals" | "Volcanoes";
