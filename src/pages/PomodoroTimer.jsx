import React, { useState, useEffect } from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

function PomodoroTimer() {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsWorkSession(!isWorkSession);
            return isWorkSession ? 300 : 1500;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isWorkSession]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(isWorkSession ? 1500 : 300);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        {isWorkSession ? "Work Session" : "Break Session"}
      </Text>
      <Text fontSize="6xl" mb={4}>
        {formatTime(time)}
      </Text>
      <VStack spacing={4}>
        <Button onClick={startTimer} colorScheme="green" isDisabled={isRunning}>
          Start
        </Button>
        <Button onClick={pauseTimer} colorScheme="yellow" isDisabled={!isRunning}>
          Pause
        </Button>
        <Button onClick={resetTimer} colorScheme="red">
          Reset
        </Button>
      </VStack>
    </Box>
  );
}

export default PomodoroTimer;
