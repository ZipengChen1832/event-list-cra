import { render } from "@testing-library/react";
import EventProvider from "../../context/EventContext";
import EventTable from "./EventTable";
// import { eventsMockData } from "../../../tests/mockData/events";

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
    const { getByText, debug } = render(
      <EventProvider>
        <EventTable />
      </EventProvider>
    );

    debug();
    // eventsMockData.forEach((event) => {
    //   expect(getByText(event.event)).toBeInTheDocument();
    //   expect(getByText(event.start)).toBeInTheDocument();
    //   expect(getByText(event.end)).toBeInTheDocument();
    // });
  });
});
