import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}



export default CardList;
//to loop over each card and adding to an array use map function
//anytime looping in react always use a key prop so wecan track items in the array