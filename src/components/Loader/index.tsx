import LoaderSVG from "../../assets/loader";
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
          <LoaderSVG className={"loader__image"} />
        </div>
      )}
      {!isLoading && children}
    </>
  );
};

export default Loader;
