import { useEffect, useState } from "react";

export const useHasBeenViewed = () => {
  const [hasTimePassed, setHasTimePassed] = useState(false);

  useEffect(() => {
    const currTimestamp = Date.now();
    const timestamp = JSON.parse(
      window.localStorage.getItem("timestamp") || "1000"
    );

    const timeLimit = 3 * 60 * 1000; // 3 minutes

    setHasTimePassed(currTimestamp - timestamp > timeLimit);

    hasTimePassed
      ? window.localStorage.setItem("timestamp", currTimestamp.toString())
      : window.localStorage.setItem("timestamp", timestamp.toString());
  }, []);

  return hasTimePassed;
};
