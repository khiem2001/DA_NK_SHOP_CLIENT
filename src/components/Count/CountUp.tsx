import React, { useEffect, useState } from 'react';
import { addZeroToFirst } from '../../utils/number';

const CountUp = () => {
  const [currentMinute, setCurrentMinute] = useState<number>(0);
  const [currentSecond, setCurrentSecond] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSecond(prevS => {
        const nextS = prevS + 1;
        if (nextS >= 60) {
          setCurrentMinute(prevM => prevM + 1);
          return 0;
        }
        return nextS;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderMinute = currentMinute > 0 ? addZeroToFirst(currentMinute) + 'm:' : '';
  return (
    <>
      {renderMinute}
      {addZeroToFirst(currentSecond)}s
    </>
  );
};

export default CountUp;
