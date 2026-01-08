import { useEffect, useRef, useState } from 'react';
import { isNil } from 'lodash';

/**
 * @description 自訂 useInterval Hook
 * @param callback 回調函數
 * @param delay 延遲時間（毫秒）
 * @return void
 */
const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isNil(delay)) {
      const id = setInterval(() => savedCallback.current?.(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

/**
 * @description 簡單的計時器，每秒更新一次數字
 * @return JSX.Element
 */
const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? 1000 : null
  );

  const handleStop = () => setIsRunning(false);
  const handleStart = () => setIsRunning(true);
  const handleReset = () => setCount(0);

  return (
    <>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};
export default Timer;
