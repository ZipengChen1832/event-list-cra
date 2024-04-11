import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import EventRow from "./EventRow";
import NewEvent from "../NewEvent/NewEvent";
import "./eventTable.css";

export default function EventTable() {
  const { isAddingMode, events } = useContext(EventContext);
  return (
    <table className="event-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Start</th>
          <th>End</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="event-list">
        {/* <EventRow
          key={"Qweqwe"}
          event={{
            eventName: "what",
            startDate: "",
            endDate: "",
            id: 1,
          }}
        /> */}
        {events.map((event) => {
          return <EventRow key={event.id} event={event} />;
        })}
        {isAddingMode && <NewEvent />}
      </tbody>
    </table>
  );
}
