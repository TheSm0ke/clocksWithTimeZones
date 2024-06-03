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

const DropDown = ({ options, changeOption, height = 150 }: DropDownProps) => {
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
    <div className="drop-down">
      <div className="drop-down__label" onClick={handlerShowOrCloseOptions}>
        <span>{selectedValue.name}</span>
      </div>
      <div
        className="drop-down__options"
        style={{
          display: optionsIsOpen ? "block" : "none",
          height: `${height}px`,
        }}
      >
        {options.map((option, index) => (
          <div
            className="drop-down__options-option"
            onClick={() => handlerSetOptions(option)}
            key={index}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
