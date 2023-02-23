import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={`/people/`}>View the Character List</Link>
    </div>
  );
}
