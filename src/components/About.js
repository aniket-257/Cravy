import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <h2>Building React Project 🚀</h2>
      <User
        name="Aniket Tarale (Functional Component)"
        location="Pune"
        contact="@ate32"
      />
      <UserClass
        name="Shrutika Donde (Class Based Components)"
        location="Nashik"
        contact="@keshu3012"
      />
    </div>
  );
};

export default About;
