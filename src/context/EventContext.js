import React, { createContext, useContext, useEffect, useState } from "react";
import eventAPIs, { getEvents } from "../api/eventAPIs";
export const EventContext = createContext(null);

export default function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [isAddingMode, setIsAddingMode] = useState(false);
  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  function handleAdd() {
    setIsAddingMode(true);
  }

  function addEvent(eventInputs) {
    eventAPIs.postEvent(eventInputs).then((newEvent) => {
      setEvents((prev) => [...prev, newEvent]);
      setIsAddingMode(false);
    });
  }

  function updateEvent(id, editedEvent) {
    setEvents((prev) => {
      return prev.map((pEvent) => {
        if (pEvent.id === id) {
          return editedEvent;
        }
        return pEvent;
      });
    });
  }

  function deleteEvent(id) {
    eventAPIs.deleteEvent(id).then(() => {
      setEvents((prev) => {
        return prev.filter((event) => event.id !== id);
      });
    });
  }

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        setIsAddingMode,
        isAddingMode,
        handleAdd,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  return useContext(EventContext);
}
