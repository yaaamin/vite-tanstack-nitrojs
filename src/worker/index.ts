import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) =>
  c.json({ name: "Heskell", currentDate: new Date().toISOString() })
);

export default app;
