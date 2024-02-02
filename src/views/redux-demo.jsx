import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../store-redux/features/countSlice';

export default function () {
  const countSlice = useSelector(state => state.countSlice);
  const dispatch = useDispatch();
  return (
    <>
      <h1>redux</h1>
      <span
        className='count-btn'
        onClick={() => dispatch(increase({ value: 5 }))}>
        +
      </span>
      <span
        className='count-btn'
        onClick={() => dispatch(decrease({ value: 10 }))}>
        -
      </span>
      <br />
      countSlice:{countSlice.value}
    </>
  );
}
