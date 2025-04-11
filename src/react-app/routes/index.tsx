import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    return await axios.get("/api/");
  },
});

function Index() {
  const data = Route.useLoaderData();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
