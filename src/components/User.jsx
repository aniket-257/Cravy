const User = ({ name, contact, location }) => {
  return (
    <div className="user">
      <h3>Dev Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

export default User;
