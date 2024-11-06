import { convertDateToReadable } from "../../lib/utils";

describe("convertDateToReadable", () => {
  it("should format date string to readable format", () => {
    expect(convertDateToReadable("2023-12-25")).toBe("December 25, 2023");
  });
});
