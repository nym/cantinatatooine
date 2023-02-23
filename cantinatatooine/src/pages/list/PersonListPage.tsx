import {
    useGetPersonListQuery,
} from '../../api/apiSlice';
import PersonListItem from './PersonListItem'

export function PersonListPage() {
  const { data, error, isLoading } = useGetPersonListQuery({})
  return (
    <div>
      <div className="personListPage">
        {error ? (
        <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {data.results.map((person: any) => (
              <PersonListItem key={person.url} uri={person.url} />
            ))}
          </>
        ) : null}      

      </div>
    </div>
  );
}
export default PersonListPage;
