import React from "react";
import BookGallery from "../../components/BookGallery/BookGallery";
import Signature from "../../components/Signature/Signature";
import Utilisateurs from "../../components/Utilisateurs/Utilisateurs";
import "./home.css";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my Home Page</h1>
      <p>This is the home page of my website built with ReactJS.</p>
      <BookGallery />
      <Utilisateurs
        name={"Jean"}
        height={175}
        weight={68}
        description={"Cause I am an alligator, against the allegation"}
      />
      <Utilisateurs
        name={"Sophie"}
        height={165}
        weight={55}
        description={"I love hiking and spending time outdoors"}
      />
      <Utilisateurs
        name={"Samuel"}
        height={180}
        weight={80}
        description={"I enjoy playing sports and staying active"}
      />
      <Utilisateurs
        name={"Emma"}
        height={160}
        weight={50}
        description={"I love reading and spending time with my pets"}
      />
      <Signature />
    </div>
  );
};

export default HomePage;
