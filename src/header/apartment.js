import React, { useEffect, useState } from "react";
import a1 from "../images/a1.jpg";
import b1 from "../images/b1.jpg";
import c1 from "../images/c1.jpg";
import d1 from "../images/z1.jpg";
import e1 from "../images/z2.jpg";
import n1 from "../images/z3.jpg";

export const Apartment = () => {
  const [sections, setSections] = useState([
    {
      name: "penthouse",
      location: a1,
      floor: "45",
      rooms: "1",
      "parking place": "no",
      price: "10000",
    },
    {
      name: "park",
      location: b1,
      floor: "67",
      rooms: "2",
      "parking place": "yes",
      price: "20000",
    },
    {
      name: "studio room",
      location: c1,
      floor: "12",
      rooms: "3",
      "parking place": "yes",
      price: "30000",
    },
    {
      name: "simplex",
      location: d1,
      floor: "77",
      rooms: "4",
      "parking place": "no",
      price: "70000",
    },
    {
      name: "double height",
      location: e1,
      floor: "100",
      rooms: "5",
      "parking place": "yes",
      price: "100000",
    },
    {
      name: "double height duplex",
      location: n1,
      floor: "33",
      rooms: "6",
      "parking place": "no",
      price: "123456",
    },
  ]);
  useEffect(() => {
    console.log("1");
    let el = document.querySelector(".secBtns");
    if (el) {
      el.classList.add("highlight");
    }
  }, []);

  const [source, setSource] = useState(a1);
  const [floor, setFloor] = useState(sections[0].floor);
  const [room, setRoom] = useState(sections[0].rooms);
  const [price, setPrice] = useState(sections[0].price);
  const [park, setPark] = useState(sections[0]["parking place"]);
  const [pic_one, setPic_one] = useState(sections[0].picA);
  const [pic_two, setPic_two] = useState(sections[0].picB);

  let valueChange = (section, e) => {
    try {
      console.log("function performed");
      setSource(section.location);
      setFloor(section.floor);
      setPark(section["parking place"]);
      setRoom(section.rooms);
      setPrice(section.price);
      setPic_one(section.picA);
      setPic_two(section.picB);
      let el = document.querySelectorAll(".highlight");
      console.log(el);
      for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("highlight");
      }
      el.className = "secBtns";
      e.target.classList.add("highlight");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="APARTMENTS">
      <div className="titleAp">APARTMENTS PLANS</div>
      <div className="apBtns">
        {sections.map((section) => {
          return (
            <div className="btnDiv">
              <button
                className="secBtns"
                onClick={(e) => {
                  console.log("action");
                  valueChange(section, e);
                }}
              >
                {section.name.toUpperCase()}
              </button>
            </div>
          );
        })}
      </div>
      <div className="apImg">
        <img alt="img" src={source} className="imgAp" />
        <div className="apDetails">
          {/* <p className="pAp">
            The gracious entry foyer leads to an open kitchen with custom
            stained walnut cabinetry, granite countertops, and a built-in dining
            banquette (in select one bedroom homes).
          </p> */}

          <table>
            <tbody>
              <tr>
                <td className="keys">FLOORS:</td>
                <td>{floor}</td>
              </tr>
              <tr>
                <td className="keys">ROOMS:</td>
                <td>{room}</td>
              </tr>
              <tr>
                <td className="keys">PARKING:</td>
                <td>{park.toUpperCase()}</td>
              </tr>
              <tr>
                <td className="keys">PRICE:</td>
                <td>$ {price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
