import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { Link } from "react-router-dom";

const users = {
  robin: {
    username: "robin",
    displayName: "Robin James Kerrison",
  },
  tristan: {
    username: "tristan",
    displayName: "Tristan Hall",
  },
};

const Profile = ({ username }) => {
  if (!username) {
    return (
      <section className="profile">
        <h2>Profile</h2>
        <p>No user selected</p>
      </section>
    );
  }
  const user = users[username];

  return (
    <section className="profile">
      <h2>Profile</h2>
      <ProfileHeader {...user}></ProfileHeader>
      <Link to="/nats">
        <button>Go Back To Nats</button>
      </Link>
    </section>
  );
};

export default Profile;
