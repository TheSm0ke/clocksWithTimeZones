import { useEffect, useState } from "react";
import Clock from "react-clock";
import DropDown, { Option } from "../DropDown";
import { useAppSelector } from "../../hook";
import { TimeZone } from "../../hooks/timeZones";
import Loader from "../Loader";
import "./index.css";

const AnalogClockWithDigitalClock = () => {
  const timeZones = useAppSelector((state) => state.timeZones);
  const date = new Date();
  const timeWithoutTimeZone = date.getTimezoneOffset() * 60000;
  const hourInMilliSeconds = 3600000;

  const [options, setOptions] = useState<Option[]>(
    timeZones.timeZones.length > 0
      ? timeZones.timeZones.map((zone: TimeZone) => {
          return { label: zone.name, value: String(zone.timezone) };
        })
      : [{ label: "test", value: "0" }],
  );
  const [currentOption, setCurrentOption] = useState<Option>();
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const options =
      timeZones.timeZones.length > 0
        ? timeZones.timeZones.map((zone: TimeZone) => {
            return { label: zone.name, value: String(zone.timezone) };
          })
        : [{ label: "test", value: "0" }];
    setOptions(options);
    setCurrentOption(options[0]);
  }, [timeZones]);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setValue(() => {
          if (isNaN(Number(currentOption?.value))) return new Date();

          return new Date(
            new Date().getTime() +
              timeWithoutTimeZone +
              +Number(currentOption?.value) * hourInMilliSeconds,
          );
        }),
      100,
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentOption, timeWithoutTimeZone]);

  const handleChangeCurrentOption = (option: Option) => setCurrentOption(option);

  function numberWithZero(num: number) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <Loader isLoading={timeZones.isLoading}>
      <div style={{ maxWidth: "200px", maxHeight: "500px" }}>
        <Clock
          size={200}
          minuteHandLength={80}
          hourHandLength={40}
          renderNumbers={true}
          value={value}
        />
        <p>
          {numberWithZero(value.getHours())}:{numberWithZero(value.getMinutes())}:
          {numberWithZero(value.getSeconds())}
        </p>
        <DropDown
          height={130}
          options={options}
          changeOption={handleChangeCurrentOption}
        />
      </div>
    </Loader>
  );
};

export default AnalogClockWithDigitalClock;