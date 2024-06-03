import { useState } from "react";
import "./DropDown.scss";

export interface Option {
  value: string | number;
  name: string;
}

interface DropDownProps {
  options: Option[];
  changeOption: (option: Option) => void;
  height?: number;
}

const DropDown = ({ options, changeOption, height }: DropDownProps) => {
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handlerShowOrCloseOptions = () => {
    setOptionsIsOpen((prev) => !prev);
  };

  const handlerSetOptions = (option: Option) => {
    setSelectedValue(option);
    handlerShowOrCloseOptions();
    changeOption(option);
  };

  return (
    <>
      <div className="drop-down" onClick={handlerShowOrCloseOptions}>
        <span>{selectedValue.name}</span>
      </div>
      <div
        className="drop-down__options"
        style={{
          display: optionsIsOpen ? "block" : "none",
          maxHeight: `${height}px`,
        }}
      >
        {options.map((option, index) => (
          <div
            className="drop-down__options__option"
            onClick={() => handlerSetOptions(option)}
            key={index}
          >
            {option.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default DropDown;
