import LoaderSVG from "../../assets/loader.svg";
import "./index.scss";

interface LoaderProps {
  isLoading: boolean;
  children?: JSX.Element;
}

const Loader = ({ isLoading, children }: LoaderProps) => {
  return (
    <>
      {isLoading && (
        <div className="loader">
          <img src={LoaderSVG} className="loader__image" alt="logo" />
        </div>
      )}
      {!isLoading && children}
    </>
  );
};

export default Loader;
