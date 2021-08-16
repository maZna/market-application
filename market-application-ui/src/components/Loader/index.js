import React from "react";
import { LoaderBox, OpaqueBox } from "./styles";

/**
 * The default loading spinner for the application
 */
function Loader() {
  return (
    <>
      <OpaqueBox />
      <LoaderBox>
        <div></div>
        <div></div>
        <div></div>
      </LoaderBox>
    </>
  );
}

export default Loader;
