import { ActivityType } from "../queries/types/activity";

export const API_BASE = `https://web-dev.dev.kimo.ai/`;

export const V1 = `/v1/`;

export const ACTIVITY_TYPES: ActivityType[] = [
  "Surfing",
  "Traditional Festivals",
  "Volcanoes",
];

export const COPY_TEXT = {
  MAIN_HEADING: "Welcome to Hawaii",
  HIGHLIGHTS: "Highlights",
  LOADING_TEXT: "Loading...",
  TRAVELLERS: [
    {
      name: "Hadwin Malone",
      subtitle: "Guide since 2012",
    },
  ],
  NAV_ITEM_DEFAULT: [
    {
      itemText: "Home",
      itemKey: "/",
    },
  ],
  NOT_VALID_ACTIVITY: "Not a valid activity type",
  BOOK_TRIP: "Book a trip",
};

export const ROUTES = {
  HIGHLIGHTS: "highlights",
};
