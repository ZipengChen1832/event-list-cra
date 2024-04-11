import React from "react";
import AddEventBtn from "./components/AddEventBtn/AddEventBtn";
import EventTable from "./components/EventTable/EventTable";
import EventProvider, { EventContext } from "./context/EventContext";

export default function App() {
  return (
    <EventProvider>
      <div className="event-list-app">
        <div className="event-actions">
          <AddEventBtn text="Add New Event" />
        </div>
        <EventTable />
      </div>
    </EventProvider>
  );
}


// fetch("http://localhost:3000/events", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     event: "New Event",
//     start: "2021-08-01T12:00:00",
//     end: "2021-08-01T15:00:00",
//   }),
// })
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
