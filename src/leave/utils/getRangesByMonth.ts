import { dateHandler } from "~lib/dayjs";

export function getRangesByMonth(
	startDate: string,
	endDate: string,
): Array<{ startDate: string; endDate: string }> {
	const monthDiff = dateHandler.utc(endDate).diff(startDate, "month");
	const ranges: Array<{ startDate: string; endDate: string }> = [];

	for (let index = 0; index <= monthDiff; index++) {
		ranges.push({
			startDate:
				index === 0
					? startDate
					: dateHandler
							.utc(startDate)
							.add(index, "month")
							.startOf("month")
							.toISOString(),
			endDate:
				index === monthDiff
					? endDate
					: dateHandler
							.utc(startDate)
							.add(index, "month")
							.endOf("month")
							.toISOString(),
		});
	}

	return ranges;
}
