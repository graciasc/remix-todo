import { useParams } from "@remix-run/react";
export default function PublicIndex() {
  const { name } = useParams();
  return <div> Private Index / Layout route {name} </div>;
}
