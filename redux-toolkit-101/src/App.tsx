import {
  increment,
  decrement,
  incrementByAmount,
} from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex items-center gap-6'>
        <div className='flex flex-col gap-5'>
          <button
            onClick={() => dispatch(increment())}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300'
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300'
          >
            Increment by amount
          </button>
        </div>

        <div className='text-lg font-semibold w-12 text-center'>{count}</div>

        <button
          onClick={() => dispatch(decrement())}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300'
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
