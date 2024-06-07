import { useAppDispatch } from "../hook";
import { getTimeZonesFromServer } from "../hooks/timeZones";
import AnalogClockWithDigitalClock from "./ClocksWithDropDown";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "../styles/notifyStyles.css";

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(getTimeZonesFromServer());

  const Clocks = (count: number) => {
    let clocks: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      clocks.push(<AnalogClockWithDigitalClock key={i} />);
    }
    return clocks;
  };

  return (
    <>
      <div className="App">{Clocks(2)}</div>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        containerId="A"
        position="bottom-right"
      />
    </>
  );
};

export default App;
