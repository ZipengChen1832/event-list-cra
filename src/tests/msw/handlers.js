import { http, HttpResponse } from "msw";
import { eventsMockData } from "../mockData/events";

const URL = "http://localhost:3000/events";

export const handlers = [
  // By calling "http.get()" we're instructing MSW
  // to capture all outgoing "GET /posts" requests
  // and execute the given response resolver when they
  // happen.
  http.get(URL, () => {
    // console.log("GET /events");
    return HttpResponse.json(eventsMockData);
  }),

  http.post(URL, async ({ request }) => {
    const newPost = await request.json();
    newPost.id = 3;
    return HttpResponse.json(newPost, { status: 201 });
  }),
];
