import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";

export async function loader() {
  // return json(await fetch("https://rickandmortyapi.com/api"));
  return json({ message: "This hit the rick and morty api" });
}

export default function PublicIndex() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  const { name } = useParams();
  return <div> Private Index / Layout route {name} </div>;
}
