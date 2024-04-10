import { render } from "@testing-library/react";
import EventRow from "./EventRow";

describe("Event Row", () => {
  it("should render event row", () => {
    const { getByText } = render(
      <EventRow
        event={{
          eventName: "Event 1",
          startDate: "2021-01-01",
          endDate: "2021-01-02",
        }}
      />
    );

    expect(getByText("Event 1")).toBeInTheDocument();
    expect(getByText("2021-01-01")).toBeInTheDocument();
    expect(getByText("2021-01-02")).toBeInTheDocument();
  });
});
