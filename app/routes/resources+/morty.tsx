import { json } from "@remix-run/node";

export async function loader() {
  console.log();
  const data = await fetch("https://rickandmortyapi.com/api/character/1");
  const rAm = await data.json();
  return json(rAm);
}
