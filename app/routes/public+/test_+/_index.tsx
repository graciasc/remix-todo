import { useParams } from "@remix-run/react";
export default function PublicIndex() {
  const { name } = useParams();
  return <div> Public About Page {name} </div>;
}
