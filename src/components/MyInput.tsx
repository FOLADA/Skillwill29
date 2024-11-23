import React from "react";

interface IInput {
  type: string;
  placeholder: string;
}

const MyInput: React.FC<IInput> = ({ type, placeholder }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default MyInput;
