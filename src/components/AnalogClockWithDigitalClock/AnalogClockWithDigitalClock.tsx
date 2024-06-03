import { useEffect, useState } from "react";
import Clock from "react-clock";
import DropDown, { Option } from "../DropDown/DropDown";
import "./AnalogClockWithDigitalClock.css";

const AnalogClockWithDigitalClock = () => {
  const options = [
    {
      value: "2",
      name: "Калиниград",
    },
    {
      value: "3",
      name: "Москва",
    },
    {
      value: "4",
      name: "Самара",
    },
    {
      value: "5",
      name: "Екатеринбург",
    },
    {
      value: "6",
      name: "Омск",
    },
    {
      value: "7",
      name: "Красноярск",
    },
    {
      value: "8",
      name: "Иркутск",
    },
    {
      value: "9",
      name: "Якутск",
    },
  ];

  const date = new Date();
  const timeWithoutTimeZone = date.getTimezoneOffset() * 60000;
  const hourInMilliSeconds = 3600000;
  console.log(new Date(date.getTime() + timeWithoutTimeZone));

  const [currentOption, setCurrentOption] = useState<Option>(options[0]);
  const [value, setValue] = useState(
    new Date(date.getTime() + timeWithoutTimeZone)
  );

  useEffect(() => {
    const interval = setInterval(
      () =>
        setValue(() => {
          return new Date(
            new Date().getTime() +
              timeWithoutTimeZone +
              +Number(currentOption?.value) * hourInMilliSeconds
          );
        }),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentOption, timeWithoutTimeZone]);

  function numberWithZero(num: number) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <div style={{ maxWidth: "200px", maxHeight: "500px" }}>
      <Clock
        size={200}
        minuteHandLength={80}
        hourHandLength={40}
        renderNumbers={true}
        value={value}
      />
      <p>
        Current time:
        {numberWithZero(value.getHours())}:{numberWithZero(value.getMinutes())}:
        {numberWithZero(value.getSeconds())}
      </p>
      <DropDown
        height={100}
        options={options}
        changeOption={(option) => setCurrentOption(option)}
      />
    </div>
  );
};

export default AnalogClockWithDigitalClock;
