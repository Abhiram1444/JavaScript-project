import useWindowSize from "../useWindowSize";

function ScreenSize() {

  const width = useWindowSize();

  return (
    <h2>
      Window Width : {width}px
    </h2>
  );
}

export default ScreenSize;