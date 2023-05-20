import React, { useEffect, useState } from 'react';
import { addZeroToFirst } from '../../utils/number';

interface Props {
  minute: number;
  second: number;
  onDone?: () => void;
}

const Countdown = (props: Props) => {
  const { minute, second, onDone } = props;
  const [currentMinute, setCurrentMinute] = useState<number>(minute);
  const [currentSecond, setCurrentSecond] = useState<number>(second);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSecond(prevS => {
        const nextS = prevS - 1;
        if (nextS <= 0) {
          setCurrentMinute(prevM => {
            const nextM = prevM - 1;
            if (nextM <= 0) {
              clearInterval(interval);
              setIsEnd(true);
            }
            return nextM;
          });
          return 60;
        }
        return nextS;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isEnd) {
      onDone && onDone();
    }
  }, [isEnd]);

  if (isEnd) {
    return null;
  }

  const renderMinute = currentMinute > 0 ? addZeroToFirst(currentMinute) + 'm:' : '';
  return (
    <span>
      {renderMinute}
      {addZeroToFirst(currentSecond)}s
    </span>
  );
};

export default Countdown;
