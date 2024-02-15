import { describe, expect, it } from "bun:test";
import { getRangesByMonth } from "./getRangesByMonth";

describe("getRangesByMonth", () => {
	it("Should produce the accurate date range when the provided date range input falls within a single month", () => {
		const data = {
			startDate: "2020-01-01T00:00:00Z",
			endDate: "2020-01-11T00:00:00Z",
		};
		expect(getRangesByMonth(data.startDate, data.endDate)).toEqual([data]);
	});

	it("Should split the date range when the provided date range input falls within multiple month", () => {
		const data = {
			startDate: "2020-01-01T00:00:00Z",
			endDate: "2020-02-11T00:00:00Z",
		};
		expect(getRangesByMonth(data.startDate, data.endDate)).toEqual([
			{
				startDate: "2020-01-01T00:00:00Z",
				endDate: "2020-01-31T23:59:59.999Z",
			},
			{
				startDate: "2020-02-01T00:00:00.000Z",
				endDate: "2020-02-11T00:00:00Z",
			},
		]);
	});
});
