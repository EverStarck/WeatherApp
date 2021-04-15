import React, { useState } from "react";

export const MobileDetailAndIndexContext = React.createContext({});

const MobileDetailProvider = ({ children }) => {
  // Open a detail info of the weather day
  const [mobileDetailInfo, setMobileDetailInfo] = useState(false);
  // Set index
  const [mobileIndex, setMobileIndex] = useState(null);

  return (
    <MobileDetailAndIndexContext.Provider
      value={{
        mobileDetailInfo,
        setMobileDetailInfo,
        mobileIndex,
        setMobileIndex,
      }}
    >
      {children}
    </MobileDetailAndIndexContext.Provider>
  );
};

export default MobileDetailProvider;
