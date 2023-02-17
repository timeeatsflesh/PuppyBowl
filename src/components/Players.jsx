import React from "react";

const Players = (props) => {
  const allThePuppies = props.allThePuppies;
 console.log(allThePuppies)
  return (
    <div>
      {allThePuppies.map((puppy, idx) => {
        return (
          <div className="puppy-card" key={`Puppy ${idx}`}>
            <h3>{puppy.name}</h3>
            <h4>{puppy.breed}</h4>
            <img src={puppy.imageUrl} alt="PuppyPicture" />
          </div>
        );
      })}
    </div>
  );
};

export default Players;
