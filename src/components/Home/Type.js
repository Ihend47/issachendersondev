import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
<<<<<<< Updated upstream
          "Cybersecurity",
          "Site Reliability Engineering",
          "DevOps",
          "DevSecOps",
          "Cloud Plaform Engieering",
=======
          "Cybersecurity?",
          "Cloud Architect & Administration?",
          "Automation?",
          "DevOps?",
          "Agile SAFe?",
          "ITIL?",
>>>>>>> Stashed changes
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;