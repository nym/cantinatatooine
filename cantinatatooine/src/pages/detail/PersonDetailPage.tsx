import { useDecoratedPerson } from '../../app/hooks'
import { Link, useParams } from "react-router-dom";

export function PersonDetailPage() {
  let params = useParams();
  const { data, error, isLoading, homeworldName, filmList, } = useDecoratedPerson(`https://swapi.dev/api/people/${params.id}/`)

    return (
      <div>
        <div className="personDetailPage">
          {error ? (
          <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h1>{data.name}</h1>
              <div>Homeworld: { homeworldName }</div>
              <div>Hair Colour: {data.hair_color}</div>
              <div>Eye Colour: {data.eye_color}</div>
              <div>Gender: {data.gender}</div>
              <hr/>
              Films: {filmList.join(', ')}
            </>
          ) : null}
          <br/><br/>
          <Link to={`/people/`}>View all Characters</Link>

        </div>
      </div>

    )
  }
  
  export default PersonDetailPage;