import React from 'react';
 
const Test = ({ domElem }) =>  {

  const { data: { testProp, testPropArr } } = domElem
  console.log('ROOTELEM', domElem)
  return <p>{testProp}</p>;
}
 

export default Test;