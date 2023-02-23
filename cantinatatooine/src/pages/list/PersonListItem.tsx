import { useDecoratedPerson } from '../../app/hooks'
import { Link } from "react-router-dom";

export function PersonListItem(props:any) {
    const { data, error, isLoading, homeworldName, filmList, } = useDecoratedPerson(props.uri)
    return (
    <div>
      <div className="personListItem">
        {error ? (
        <>Oh no, there was an error</>
        ) : isLoading ? (
          <>...</>
        ) : data ? (
          <>
            <Link to={`/person/${data.url.split('people/')[1]}`}>
                {data.name}
            </Link>
            <br/>
            Homeworld: {homeworldName}<br/>
            Gender: {data.gender} <br/>
            Films: {filmList.join(', ')}
            <hr/>
          </>
        ) : null}      

      </div>
    </div>
  );
}
export default PersonListItem;
