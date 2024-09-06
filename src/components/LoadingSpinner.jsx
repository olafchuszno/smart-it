import { BallTriangle } from "react-loader-spinner"

export const LoadingSpinner = () => {
  return (<BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#86bf2b"
    ariaLabel="ball-triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
/>)
}