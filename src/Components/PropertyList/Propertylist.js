import React from "react";
import "./PropertyList.css";

const Propertylist = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://files01.pna.gov.ph/category-list/2021/09/07/joy-nostalg.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i0.wp.com/www.innovationquarter.com/wp-content/uploads/2022/01/winston-salem-apartment-complex_1200w.jpeg?resize=1024%2C684&ssl=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.travelandleisure.com/thmb/5R9bFSANt_omAnaJoF9_xSTOI4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-mexico-resort-hotel-Viceroy-Riviera-Maya-00-MXRESHOTWB21jpg-f32ab547d1d849369066e55312dc4440.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/257276599.jpg?k=846d464626c6f30d8ad8dce3b296e7bd8aae2957b99a401366d23f7ec5e1a28e&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media.vrbo.com/lodging/34000000/33740000/33734500/33734466/1dec8b51.c6.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Propertylist;
