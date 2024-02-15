import { describe, expect, it } from "bun:test";
import { leaves as app } from ".";

describe("Leaves split by month", () => {
	it("Should return correct json with valid input", async () => {
		const req = new Request(
			"http://localhost:3000/monthly-split?startDate=2020-01-01T00:00:00Z&endDate=2020-01-11T00:00:00Z",
		);
		const res = await app.fetch(req);
		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			ranges: [
				{
					startDate: "2020-01-01T00:00:00Z",
					endDate: "2020-01-11T00:00:00Z",
				},
			],
		});
	});
	it("Should send a 400 bad request if date inputs are not valid", async () => {
		const req = new Request(
			"http://localhost:3000/monthly-split?startDate=2020-0101T00:00:00Z&endDate=2020-01-11T00:00:00Z",
		);
		const res = await app.fetch(req);
		expect(res.status).toBe(400);
		expect(await res.json()).toEqual({
			error: {
				issues: [
					{
						code: "invalid_string",
						validation: "datetime",
						message: "Invalid datetime",
						path: ["startDate"],
					},
					{
						code: "custom",
						message: "End date cannot be earlier than start date",
						path: ["end"],
					},
				],
				name: "ZodError",
			},
			success: false,
		});
	});
	it("Should send a 400 bad request if start date is after end date", async () => {
		const req = new Request(
			"http://localhost:3000/monthly-split?startDate=2020-02-01T00:00:00Z&endDate=2020-01-11T00:00:00Z",
		);
		const res = await app.fetch(req);
		expect(res.status).toBe(400);
		expect(await res.json()).toEqual({
			error: {
				issues: [
					{
						code: "custom",
						message: "End date cannot be earlier than start date",
						path: ["end"],
					},
				],
				name: "ZodError",
			},
			success: false,
		});
	});
});
