import PreviewVideo from "../PreviewVideo/PreviewVideo";
import GridView from "../GridView/GridView";
import { useState } from "react";

const Moj = () => {
  const [stepCount, setStepCount] = useState(1);
  return (
    <>
      {stepCount === 1 && <GridView setStepCount={() => setStepCount(2)}/>}
      {stepCount === 2 && <PreviewVideo setStepCount={() => window.open("/?business=blazon","_self")} />}
    </>
  );
};

export default Moj;
