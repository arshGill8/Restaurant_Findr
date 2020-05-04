import React from "react";

const InputField = ({ inputValue, updateInput }) => {
  return (
    <form>
      <input type="text" onChange={updateInput} value={inputValue} />
      <button>Submit</button>
      <p>{inputValue}</p>
    </form>
  );
};

export default InputField;
