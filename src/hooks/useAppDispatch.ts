import { AppDispatch } from 'app/store'
import { useDispatch } from 'react-redux'

const useAppDispatch = () => {
  const dispatch: AppDispatch = useDispatch();
  
  return dispatch;
}

export default useAppDispatch
