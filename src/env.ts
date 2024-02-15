import { z } from "zod";

const envVariables = z.object({
	PORT: z.coerce.number(),
});

export const env = envVariables.parse(Bun.env);
