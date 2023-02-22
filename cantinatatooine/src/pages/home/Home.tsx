import { Link } from "react-router-dom";

export default function Home() {
    return (
       <div>
            ....
            <Link to={`/list/`}>View the Character List</Link>
        </div>

    )
}