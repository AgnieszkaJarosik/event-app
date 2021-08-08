import { formatDate } from "./dateUtils";

describe("formatDate", () => {
  test('foramt provided date', async () => {
    const date = "2021-08-17T22:00:00.000Z";

    expect(formatDate(date)).toBe("Aug 18, 2021")
  });

  test('format current date if date was not provided', async () => {
    expect(formatDate("")).toBe("");
  });
})
