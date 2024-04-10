import React, { useContext, useState } from "react";
import eventAPIs from "../../api/eventAPIs";
import { EventContext } from "../../context/EventContext";
import useEventInputs from "../../hooks/useEventInputs";
import "./newEvent.css";
export default function NewEvent() {
  const { setIsAddingMode, addEvent } = useContext(EventContext);
  const [eventInputs, handleChange] = useEventInputs();

  function handleAdd() {
    addEvent(eventInputs);
  }

  function handleCancel() {
    setIsAddingMode(false);
  }

  return (
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
        <button className="event__btn-save" onClick={handleAdd}>
          Save
        </button>
        <button className="event__btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
}
