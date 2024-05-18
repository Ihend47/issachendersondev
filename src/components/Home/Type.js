import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
<<<<<<< HEAD
          "Cybersecurity",
          "Site Reliability Engineering",
          "DevOps",
          "DevSecOps",
          "Cloud Plaform Engieering",
=======
          "DevOps Engineer",
          "Cloud Architect",
          "Automation Specialist",
          "Continuous Integration/Delivery Expert",
>>>>>>> 9694b2d03a0894684aa9db74a896b464e49e97bd
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;