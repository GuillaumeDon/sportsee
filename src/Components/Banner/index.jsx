import React from "react";

function Banner({classNameBanner, children}) {
  return (
    <div className={classNameBanner}>
      {children}
    </div>
  );
}

export default Banner;