import React, { useState } from "react";
import "./footer.css";
import picA from "../images/persons/Oval-Copy_1x.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import instaIcon from "../images/symbol/instagram-copy.svg";
import fbIcon from "../images/symbol/facebook-copy.svg";
import lkIcon from "../images/symbol/linkedin-copy.svg";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Footer = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  let submit = async () => {
    try {
      if (name === "" || mail === "" || msg === "") {
        window.alert("please fill in the details");
      } else {
        await axios
          .post("https://estatebe-production.up.railway.app/ensurePost", {
            name,
            mail,
            msg,
          })
          .then((res) => {
            console.log(res);
            window.alert("We will reach out to you soon");
            setMail("");
            setName("");
            setMsg("");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="Footer">
      <div className="title">"Home is the nicest word there is"</div>

      <div className="details">
        <div className="location">
          <div className="placeDetails">BUILDING LOCATION</div>
          <div className="Address">
            <div className="Ad_a">ADDRESS</div>
            <div className="Ad_b">:</div>
            <div className="Ad_c">
              <div>Logan Barker,</div>
              <div>865 Oak Boulevard,</div>
              <div>Elk Grove, Vermont 95184</div>
            </div>
          </div>
          <div className="Phone">
            <div className="Ad_a">PHONE</div>
            <div className="Ad_b">:</div>
            <div className="Ad_c">+09-8765432</div>
          </div>
          <div className="Email">
            <div className="Ad_a">EMAIL</div>
            <div className="Ad_b">:</div>
            <div className="Ad_c">email.support @iconic.com</div>
          </div>
        </div>

        <div className="about">
          <div className="agentDetails">CONTACT AGENT</div>
          <div className="agentDetailsA">
            <div className="img_a">
              <img
                src={picA}
                alt="agent"
                className="agentA"
                height={85}
                width={85}
              ></img>
            </div>
            <div className="img_details">
              <div className="detail_a">Sergio Ramos</div>
              <div className="detail_b">Certified Agent</div>
            </div>
          </div>
          <hr />
          <div className="agentDetailsB">
            <div className="phoneDetail">
              <LocalPhoneIcon id="localIcon" />
              +12-9876543
            </div>
            <div className="mailDetail">
              <MailIcon id="MailIcon" />
              sergio.ramos@gmail.com
            </div>
          </div>
        </div>

        <div className="schedule">
          <div className="enquireDetails">ENQUIRE</div>
          <div className="inputName">
            <input
              type="textbox"
              className="nameInput"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="inputGmail">
            <input
              type="textbox"
              className="mailInput"
              placeholder="Your mail *"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </div>
          <div className="inputmsg">
            <textarea
              cols="40"
              rows="3"
              placeholder="Write us...*"
              className="textInput"
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="submit">
            <button
              className="submitBtn"
              onClick={() => {
                submit();
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      <hr id="footHR"></hr>

      <div className="links">
        <div className="policy">
          © ICONIC. ALL RIGHTS RESERVED. #TERMS OF USE AND #PRIVACY POLICY
        </div>
        <div className="iconsMedia">
          <div className="instaDiv">
            <img src={instaIcon} alt="insta" className="instaIcon"></img>
          </div>
          <div className="fbDiv">
            <img src={fbIcon} alt="facebook" className="fbIcon"></img>
          </div>
          <div className="lkDiv">
            <img src={lkIcon} alt="linkedin" className="lkIcon"></img>
          </div>
        </div>
      </div>

      <div className="backbtn">
        <button
          className="homeBtn"
          onClick={() => {
            let el = document.getElementById("HOME");
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          ⇧
        </button>
      </div>
    </div>
  );
};
