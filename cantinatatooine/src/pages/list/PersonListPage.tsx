import {
    useGetPersonListQuery,
} from '../../api/apiSlice';

export function PersonListPage() {
  // TODO: figure out why this is crashing the app, it should work...
  const { data, error, isLoading } = useGetPersonListQuery({})
  return (
    <div>
      <div>
        {error ? (
        <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
              <ul>
              {data.results.map((person: any) => (
                <li>
                  {person.name}
                  <br/>
                  Eye Colour: {person.eyeColor} Hair Colour: {person.hairColor} Gender: {person.gender} <br/>
                  Films: {person.films}  
                </li>
              ))}
              </ul>
          </>
        ) : null}      

      </div>
    </div>
  );
}
export default PersonListPage;
