'use client';
import { CountdownProps } from "@/interfaces/props/CountDownProps";
import { useState, useEffect } from "react";

const Countdown = ({ targetDate }: CountdownProps) => {
  // State to track if the component is mounted
  const [isMounted, setIsMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(() => calculateTimeRemaining(targetDate));

  // Set up a timer to update the countdown on client side only
  useEffect(() => {
    setIsMounted(true); // Mark as mounted after the component is rendered on the client

    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(targetDate);
      setTimeRemaining(newTimeRemaining);

      // Stop the timer if the countdown reaches zero
      if (newTimeRemaining.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Function to calculate the remaining time
  function calculateTimeRemaining(target: string) {
    const targetTime = new Date(target).getTime();
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, total: difference };
  }

  if (!isMounted) {
    return null; // Prevent server-side rendering mismatch
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
  <div className="flex flex-col">
    <span className="countdown font-mono text-8xl font-medium text-black max-[950px]:text-[32px] max-[950px]:mt-4">
      <span style={{ "--value": days } as React.CSSProperties}></span>: 
      <span style={{ "--value": hours } as React.CSSProperties}></span>:
      <span style={{ "--value": minutes } as React.CSSProperties}></span>:
      <span style={{ "--value": seconds } as React.CSSProperties}></span>
    </span>
    <span className="font-mono text-2xl flex text-transparent max-[950px]:text-[10px]">
      <span className="w-1/4 text-[#BBB2B2] font-semibold flex justify-center">Days</span>:
      <span className="w-1/4 text-[#BBB2B2] font-semibold flex justify-center">Hours</span>:
      <span className="w-1/4 text-[#BBB2B2] font-semibold flex justify-center">Minutes</span>:
      <span className="w-1/4 text-[#BBB2B2] font-semibold flex justify-center">Seconds</span>
    </span>

  </div>
  );
};

export default Countdown;
