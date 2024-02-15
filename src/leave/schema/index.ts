import { z } from "zod";
import { dateHandler } from "~lib/dayjs";

export const monthlySplitQuerySchema = z
	.object({
		startDate: z.string().datetime(),
		endDate: z.string().datetime(),
	})
	.refine(
		(data) =>
			dateHandler.utc(data.endDate).isAfter(dateHandler.utc(data.startDate)),
		{
			message: "End date cannot be earlier than start date",
			path: ["end"],
		},
	);
