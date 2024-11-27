import React, { createContext } from "react";

export const ProductionEnvironmentContext = createContext<boolean>(false);

const EnvironmentProvider = ({ children }) => {
  const location = window.location.href;
  const isProductionEnvironment = !location.includes('localhost');

  return <ProductionEnvironmentContext.Provider value={isProductionEnvironment}>
    {children}
  </ProductionEnvironmentContext.Provider>
}

export default EnvironmentProvider