import { findByText, render } from "@testing-library/react";
import EventProvider from "../../context/EventContext";
import EventTable from "./EventTable";
import { eventsMockData } from "../../tests/mockData/events";

describe("Event Table", () => {
  it("should render event table", async () => {
    const { getByText, debug } = render(
      <EventProvider>
        <EventTable />
      </EventProvider>
    );

    expect(getByText("Event")).toBeInTheDocument();
    expect(getByText("Start")).toBeInTheDocument();
    expect(getByText("End")).toBeInTheDocument();
    expect(getByText("Actions")).toBeInTheDocument();
  });

  it("should render event rows", async () => {
    const { getByText, debug, findAllByTestId } = render(
      <EventProvider>
        <EventTable />
      </EventProvider>
    );

    eventsMockData.forEach(async (event) => {
      expect(await findByText(event.event)).toBeInTheDocument();
      expect(await findByText(event.start)).toBeInTheDocument();
      expect(await findByText(event.end)).toBeInTheDocument();
      expect(getByText("Edit")).toBeInTheDocument();
      expect(getByText("Delete")).toBeInTheDocument();
    });

    expect(await findAllByTestId("event-row")).toHaveLength(
      eventsMockData.length
    );

    debug();
  });
});
