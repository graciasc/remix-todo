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
    const errorText = "You can't increment the counter anymore!";

    return json({
      error: errorText,
      counter,
    });
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
  const formData = await request.formData();
  const actionType = formData.get("action");

  const session = await getSession(request.headers.get("Cookie"));
  if (actionType === "INCREMENT") {
    let counter = session.get("counter");
    session.set("counter", (counter! += 1));
  }
  if (actionType === "DECREMENT") {
    let counter = session.get("counter");
    session.set("counter", (counter! -= 1));
  }
  if (actionType === "RESET") {
    const counter = session.get("counter");
    session.set("counter", 0);
  }

  const headers = {
    "Set-Cookie": await commitSession(session),
  };
  return json({ counter: session.get("counter") }, { headers });
}
export default function Index() {
  const { error, counter } = useLoaderData<typeof loader>();
  return (
    <div className="p-4 bg-black text-white h-full">
      {error ? (
        <div className="">
          <h1> {error}</h1>
          <Form method="POST">
            <button
              name="action"
              value="RESET"
              className="rounded-md p-4 mt-2 bg-yellow-700"
              type="submit"
            >
              Reset
            </button>
          </Form>
        </div>
      ) : (
        <div>
          <p>Current count: {counter}</p>
          <Form method="POST" className="space-x-2">
            <button
              name="action"
              value="INCREMENT"
              className="rounded-md p-4 bg-teal-700"
              type="submit"
            >
              Increment
            </button>
            <button
              name="action"
              value="DECREMENT"
              className="rounded-md p-4 bg-red-700"
              type="submit"
            >
              Decrement
            </button>
          </Form>
        </div>
      )}
    </div>
  );
}
