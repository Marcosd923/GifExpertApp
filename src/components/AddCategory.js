import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  //funcion que recibe el evento(lo que se envia dentro del input, por el setInputValue)
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // el setInput va modificando el inputValue con los cambios que el cliente ingresa en el input
  };

  // para prevenir el refresh del formulario se utiliza el e.preventDefault
  const handleSubmmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
