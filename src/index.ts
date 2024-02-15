import { Hono } from "hono";
import { env } from "./env";
import { leaves } from "./leave/routes";

const app = new Hono();

app.route("/leaves", leaves);

export default {
	port: env.PORT,
	fetch: app.fetch,
};
