import React from 'react';
import {AppContext} from "../App";
import nextId from "react-id-generator";

const Input = () => {
  const { selectedProduct, setSelectedProduct, object, setObject} = React.useContext(AppContext)
  let [counter, setCounter] = React.useState(1)
  const htmlId = nextId()
  console.log(selectedProduct)
  const handleClickPlus = () => {
    setCounter(++counter)
    setSelectedProduct(prev => [...prev, {
      ...object,
      id: htmlId
    }])
  }

  const handleClickMinus = () => {
    setCounter(--counter)
    if(counter === 0 )setSelectedProduct([])
  }

  const onChangeValueInput = (e) => {
    setCounter(+e.target.value)
  }


  return (
    <>
      <button
        onClick={handleClickPlus}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <input
        onChange={onChangeValueInput}
        value={counter}/>
      <button
        onClick={handleClickMinus}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </>
  );
};

export default Input;
