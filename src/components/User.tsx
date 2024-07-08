import React from "react";
import { useUser } from "../store/userContext";

const User = () => {
  const { user } = useUser();
  return <div>hello {user?.name} from user component</div>;
};

export default User;
