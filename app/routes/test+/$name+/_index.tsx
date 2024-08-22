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
  return (
    <div>
      <p className="text-black text-xl">Pico CSS Experiment</p>
      <p>Private Index / Layout route {name} </p>
      <div className="text-white flex flex-col justify-center  justify-items-center bg-gray-800">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-full w-full object-fill">
            <img
              alt="leaves on the ground"
              src={
                "https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <div className="p-12">
            <input
              type="text"
              name="text"
              placeholder="Text"
              aria-label="Text"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              autoComplete="email"
            />
            <input
              type="number"
              name="number"
              placeholder="Number"
              aria-label="Number"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Tel"
              aria-label="Tel"
              autoComplete="tel"
            />
            <input type="url" name="url" placeholder="Url" aria-label="Url" />
          </div>
        </div>
      </div>
    </div>
  );
}
