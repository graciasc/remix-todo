import { NavLink } from "@remix-run/react";
export default function Index() {
  //TODO: Use the rick and morty api to build something fun
  return (
    <div className="p-12 space-x-2">
      <NavLink className="bg-red-400 p-4 rounded-lg text-white" to="public">
        Public
      </NavLink>
      <NavLink className="bg-red-400 p-4 rounded-lg text-white" to="public/404">
        404
      </NavLink>
      <NavLink className="bg-red-400 p-4 rounded-lg text-white" to="user">
        User
      </NavLink>
    </div>
  );
}
