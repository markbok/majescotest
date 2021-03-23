import React from 'react';
 
const Test = () =>  {
  const rootElem = document.querySelectorAll('.majescoReact')
  const { data: { testProp, testPropArr } } = rootElem
  console.log('ROOTELEM', rootElem)
  return <p>{rootElem}</p>;
}
 

export default Test;