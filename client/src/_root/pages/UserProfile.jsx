import { useParams } from "react-router-dom";
import { useAppQueries } from "../../lib/react-query/queries";

const UserProfile = () => {
  const { id } = useParams();
  const { getUserQuery } = useAppQueries();
  const { data, isPending, isError } = getUserQuery(id);
  console.log(data);
  return <div></div>;
};

export default UserProfile;
