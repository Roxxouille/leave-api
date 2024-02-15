import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { monthlySplitQuerySchema } from "../schema";
import { getRangesByMonth } from "../utils/getRangesByMonth";

const app = new Hono();

app.get(
	"/monthly-split",
	zValidator("query", monthlySplitQuerySchema),
	(context) => {
		const { startDate, endDate } = context.req.valid("query");

		return context.json({ ranges: getRangesByMonth(startDate, endDate) });
	},
);

export { app as leaves };
