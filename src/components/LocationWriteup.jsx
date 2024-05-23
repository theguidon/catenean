import React from "react";
import "../styles/LocationWriteup.css";

import Pin from "../assets/images/location-pin.svg";
import Cat1 from "../assets/images/location-mvp-cat-1.svg";
import Cat2 from "../assets/images/location-mvp-cat-2.svg";
import Building from "../assets/images/location-mvp-building.svg";
import Title from "../assets/images/location-mvp-title.svg";
import MapFold from "../assets/images/location-map-fold.svg";

export default function LocationWriteup() {
  return (
    <div className="container">
      <div className="content">
        <div className="photo-container">
          <div className="photo-container__photo">
            <img src={Cat1} />
            <p>Dongyan</p>
          </div>
          <div className="photo-container__photo">
            <img src={Cat2} />
            <p>Barbie</p>
          </div>
        </div>
        <div className="writing-container">
          <div className="writing-container__title">
            <img src={Pin} />
            <img src={Title} />
            <h1>MVP</h1>
          </div>
          <img className="writing-container__building" src={Building} />
          <div className="writing-container__writing">
            <h2>A cat’s playground</h2>
            <div>
              <p>
                The Manuel V. Pangilinan Center for Student Leadership (MVP) is
                a hallmark of the Ateneo’s vibrant student life. Apart from
                being the birthplace and center of student-led organizations, it
                is also the abode of the two fan-favorite MVP cats, Dongyan and
                Barbie.
              </p>
              <p>
                Those who arrive on campus in the early mornings may chance upon
                Dongyan and Barbie playing chase by the MVP entrance. Other
                times, they would sit proudly on the front desk, nap on the
                press stands by the staircase, or pose for the students{" "}
                <a href="https://www.facebook.com/ateneo.osa/posts/pfbid02KDnFNubVpcURMain4fSoCNeC1bkpjEupDhtpZinj9HoEjDuf2MT3W93Fn1CjEyuDl" target="_blank">
                  taking photographs
                </a>{" "}
                of them.
              </p>
              <p>
                “Dongyan [has] been a resident there for quite a long time, and
                he actually got his name from the [security] guard stationed
                there,” Guce explains. The story being passed around goes that
                when someone asks about the cat, one would respond “Kay Dong
                ‘yan (That’s Dong’s),” referring to Fortunato “Dong” Butlig, a
                security guard formerly stationed at MVP.
              </p>
              <p>
                Barbie, on the other hand, started residing in the building
                because a student asked Kuya Dong to take care of her. Guce
                notes that requesting school staff to foster cats is prohibited.
                However, Barbie was already at MVP, and Dongyan decided to adopt
                her. As of writing, Kuya Dong is no longer stationed at MVP, and
                instead regularly makes his rounds around the college parking
                lots, the dorms, the Institute of Social Order area, and Areté.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-fold">
        <a href="https://www.google.com/">
          <img src={MapFold} className="map-fold__fold" />
        </a>
      </div>
      <div className="background"></div>
    </div>
  );
}
