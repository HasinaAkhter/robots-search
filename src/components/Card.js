import React from 'react';

const Card = ({ name,email,id }) =>{

  return(
    <div className="tc bg-light-green dib br2 pa1 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
       <div>
         <h2>{name}</h2>
         <p>{email}</p>
        </div>
   </div>
  );


}

export default Card;
//template literal was used to pass id 
// destructing was used instead of using props many times