import {
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
  json,
} from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

import { getSession, destroySession, commitSession } from "~/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  // loaders update
  const session = await getSession(request.headers.get("Cookie"));
  const counter = session.get("counter");
  session.set("counter", session.get("counter") || 0);

  if (counter && counter > 10) {
    session.set("error", "You can't increment the counter anymore!");
    return json({ error: "You can't increment the counter anymore!" });
  }

  const data = {
    error: session.get("error"),
    counter: session.get("counter"),
  };
  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function action({ request }: ActionFunctionArgs) {
  console.log({ request });
  const session = await getSession(request.headers.get("Cookie"));
  let counter = session.get("counter");

  session.set("counter", (counter! += 1));

  const headers = {
    "Set-Cookie": await commitSession(session),
  };
  return json({ counter: session.get("counter") }, { headers });
}
export default function Index() {
  const { error, counter } = useLoaderData<typeof loader>();
  console.log({ error, counter });
  return (
    <div className="p-4 bg-black text-white h-full">
      {error ? (
        <div> {error}</div>
      ) : (
        <div>
          <p>Current count: {counter}</p>
          <Form method="POST">
            <button className="rounded-md p-4 bg-teal-700" type="submit">
              Increment
            </button>
          </Form>
        </div>
      )}
    </div>
  );
}
