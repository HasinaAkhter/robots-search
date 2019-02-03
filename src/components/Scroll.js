import React from 'react';

const Scroll = (props) => {
return (
<div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
  {props.children}
</div>
  );
}

export default Scroll;

//to add style here we used double curly braces, the first one is for js //expression and within it we are returning a js object that can have a styl 
//scroll is a wrapper of CardList component which is inturn scroll's children