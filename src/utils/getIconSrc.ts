const getIconSrc = (iconPath: string, isProduction?: boolean) => {
  const srcHeading = isProduction ? process.env.REACT_APP_PRODUCTION_URL : process.env.REACT_APP_DEVELOPMENT_URL;

  return `url(${srcHeading}/icons/${iconPath})`;
}

export default getIconSrc;