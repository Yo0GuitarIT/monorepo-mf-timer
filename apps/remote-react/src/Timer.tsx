import { useEffect, useRef, useState } from 'react';
import { isNil } from 'lodash';

/**
 * @description 自訂 useInterval Hook
 * @param callback 回調函數
 * @param delay 延遲時間（毫秒）
 * @return void
 */
const useInterval = (callback: () => void, delay: number) => {
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

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
};
export default Timer;
