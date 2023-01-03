import React from "react";
import "./Feature.css";

const data = [
  {
    Name: "Australia",
    Property: "123",
    img: "https://a.cdn-hotels.com/gdcs/production5/d1996/54fdb73f-eee5-4612-a3e7-6fc7ed2f7bee.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    Alt: "australia",
  },
  {
    Name: "London",
    Property: "450",
    img: "https://i0.wp.com/www.montcalmroyallondoncity.co.uk/blog/wp-content/uploads/2017/07/shutterstock_107597459.jpg?fit=1000%2C667&ssl=1",
    Alt: "london",
  },
  {
    Name: "Canada",
    Property: "330",
    img: "https://www.planetware.com/wpimages/2020/03/canada-best-cities-toronto-ontario.jpg",
    Alt: "canada",
  },
];

const Feature = () => {
  return (
    <div className="featured">
      {data.map((data) => (
        <div className="featuredItem">
          <img src={data.img} alt={data.Alt} className="featuredImg" />
          <div className="featuredTitles">
            <h1>{data.Name}</h1>
            <h2>{data.Property} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
