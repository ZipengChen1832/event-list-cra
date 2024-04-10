import React, { useEffect, useState } from "react";
import eventAPIs from "../../api/eventAPIs";
import { useEvent } from "../../context/EventContext";
import useEventInputs from "../../hooks/useEventInputs";
import "./eventRow.css";

export default function EventRow({ event }) {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const { updateEvent, deleteEvent } = useEvent();
  const [eventInputs, handleChange] = useEventInputs(event);

  function handleEdit() {
    setIsEditingMode(true);
  }

  function handleCancel() {
    setIsEditingMode(false);
  }

  function handleSave(id, eventInputs) {
    const newEvent = { ...eventInputs };
    eventAPIs.editEvent(id, newEvent).then((editedEvent) => {
      updateEvent(id, editedEvent);
      setIsEditingMode(false);
    });
  }

  function handleDelete() {
    deleteEvent(event.id);
  }

  const { eventName, startDate, endDate } = event;
  return isEditingMode ? (
    <tr className="event">
      <td>
        <input
          name="eventName"
          className="event__name"
          type="text"
          value={eventInputs.eventName}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="startDate"
          className="event__start-date"
          type="date"
          value={eventInputs.startDate}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="endDate"
          className="event__end-date"
          type="date"
          value={eventInputs.endDate}
          onChange={handleChange}
        />
      </td>
      <td className="event__actions">
        <button
          className="event__btn-save"
          onClick={() => handleSave(event.id, { ...eventInputs })}
        >
          S
        </button>
        <button className="event__btn-cancel" onClick={handleCancel}>
          C
        </button>
      </td>
    </tr>
  ) : (
    <tr className="event">
      <td className="event__name">{eventName}</td>
      <td className="event__start-date">{startDate}</td>
      <td className="event__end-date">{endDate}</td>
      <td className="event__actions">
        <button className="event__btn-edit" onClick={handleEdit}>
          Edit
        </button>
        <button
          className="event__btn-delete"
          onClick={() => handleDelete(event.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
