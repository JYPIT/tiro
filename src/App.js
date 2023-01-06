import { useEffect, useRef } from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const wiggle = keyframes`
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
`;

const TimerButton = styled.button`
  font-size: 100px;
  border-radius: 15px; ;
`;

const Button = styled.button`
  font-size: 50px;
  border-radius: 15px;
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: tomato;
  margin-top: 100px;
  animation: ${wiggle} 2s linear infinite;
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [count, setCount] = useState(0);
  const [isCount, setIsCount] = useState(false);
  const onChange = (e) => {
    const value = e.target.value;
    setCount(value);
  };
  const countId = useInterval(
    () => {
      if (count === 1) {
        console.log("End");
        setIsCount(false);
      }
      setCount(count - 1);
    },
    isCount ? 1000 : null
  );

  const onCount = () => {
    if (count === 0) {
      setIsCount(false);
    } else {
      setIsCount(true);
    }
  };

  const resetCount = () => {
    clearInterval(countId);
    setIsCount(false);
    setCount(0);
  };
  const stopCount = () => {
    if (count === 0) {
      setIsCount(false);
    } else {
      clearInterval(countId);
      setIsCount((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <input
        value={count}
        onChange={onChange}
        type="number"
        placeholder="타이머 시간 설정"
      />

      <TimerButton
        onClick={onCount}
        style={{
          backgroundColor: count <= 3 ? "red" : "teal",
        }}
      >
        Timer: {count}
      </TimerButton>
      <Button onClick={stopCount}>{isCount ? "Stop" : "Start"}</Button>
      <Button onClick={resetCount}>Reset</Button>
      <Box></Box>
    </Wrapper>
  );
}

export default App;
