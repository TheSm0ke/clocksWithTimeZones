import { useEffect, useState } from "react";
import ArrowDropDown from "../../assets/arrow-drop-down.svg";
import "./index.scss";

export interface Option {
  value: string | number;
  name: string;
}

interface DropDownProps {
  options: Option[];
  changeOption: (option: Option) => void;
  height?: number;
  defaultValue?: Option;
}

const DropDown = ({
  options,
  changeOption,
  height = 150,
  defaultValue = options[0],
}: DropDownProps) => {
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handlerShowOrCloseOptions = () => {
    setOptionsIsOpen((prev) => !prev);
  };

  const handlerSetOptions = (option: Option) => {
    setSelectedValue(option);
    handlerShowOrCloseOptions();
    changeOption(option);
  };

  const addDotToLargeWord = (word: string) => {
    if (word.length > 15) {
      return `${word.slice(0, 15)}...`;
    }
    return word;
  };

  return (
    <div className="drop-down">
      <div
        className="drop-down__label"
        style={{ backgroundColor: optionsIsOpen ? "#ebebeb" : "#fff" }}
        onClick={handlerShowOrCloseOptions}
      >
        <span className="drop-down__label-selected">
          {addDotToLargeWord(selectedValue.name)}
        </span>
        <img
          className="drop-down__label-img"
          style={{
            rotate: optionsIsOpen ? "180deg" : "0deg",
          }}
          src={ArrowDropDown}
          alt="arrow-drop-down"
        />
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
