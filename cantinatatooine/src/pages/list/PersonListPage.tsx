import {
    useGetPersonListQuery,
} from '../../api/apiSlice';

export function PersonListPage() {
  // TODO: figure out why this is crashing the app, it should work...
  const { data, error, isLoading } = useGetPersonListQuery({})
  return (
    <div>
      <div>
      { isLoading }
      { error }
      { data }
      </div>
    </div>
  );
}
export default PersonListPage;
