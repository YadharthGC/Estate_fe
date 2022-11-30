import React from "react";
import "./header.css";
import k1 from "../images/allure/k1.jpg";
import k2 from "../images/allure/k2.png";
import k3 from "../images/allure/k3.png";

export const About = () => {
  return (
    <div id="About">
      <div className="Aboutparts">
        <div className="abta">
          <div className="abtIMG">
            <img alt="k1" src={k1} className="abtimg" />
          </div>
          <div className="abttext">
            From the vibrant ground level plaza to the terraces, private
            gardens, balconies and lush rooftop work spaces, Costix offers an
            array of amenitiesLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
        </div>
      </div>
      <div className="Aboutparts">
        {" "}
        <div className="abtb">
          <div className="abttext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.From the vibrant ground
            level plaza to the terraces, private gardens, balconies and lush
            rooftop work spaces, Costix offers an array of amenities …
          </div>
          <div className="abtIMG">
            <img alt="k2" src={k2} className="abtimg" />
          </div>
        </div>
      </div>
      <div className="Aboutparts">
        <div className="abtc">
          <div className="abtIMG">
            <img alt="k3" src={k3} className="abtimg" />
          </div>
          <div className="abttext">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose
          </div>
        </div>
      </div>
    </div>
  );
};
