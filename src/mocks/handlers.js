import { http, HttpResponse } from "msw";
import { eventsMockData } from "./mockEvents";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("http://localhost:3000/events", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(eventsMockData);
  }),
];
