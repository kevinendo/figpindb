import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, user_id, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p className="pin-name">{user.email}</p>
        <p className="pin-name">{user.sub}</p>
      </div>
    )
  );
};

export default Profile;