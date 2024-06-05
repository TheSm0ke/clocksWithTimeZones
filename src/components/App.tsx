import { useAppDispatch } from "../hook";
import { getTimeZonesFromServer } from "../hooks/timeZones";
import AnalogClockWithDigitalClock from "./ClocksWithDropDown";
import "./App.css";

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(getTimeZonesFromServer());
  return (
    <div className="App">
      <AnalogClockWithDigitalClock />
      <AnalogClockWithDigitalClock />
    </div>
  );
};

export default App;
