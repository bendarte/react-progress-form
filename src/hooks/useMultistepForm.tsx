import { ReactElement, useState } from "react";

// Define a custom hook called `useMultistepForm` that takes an array of ReactElement(s) as input.
export function useMultistepForm(steps: ReactElement[]) {
  // Define a state variable called `currentStepIndex` and a function to update it called `setCurrentStepIndex` using the useState hook.
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Define a function called `next` that increments the `currentStepIndex` state variable if it's not already at the end of the `steps` array.
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  // Define a function called `back` that decrements the `currentStepIndex` state variable if it's not already at the beginning of the `steps` array.
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  // Define a function called `goTo` that sets the `currentStepIndex` state variable to a specific index.
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  // Return an object containing the `currentStepIndex`, the current `step`, the `goTo` function, the `next` function, and the `back` function.
  return {
    currentStepIndex,
    steps: steps[currentStepIndex],
    goTo,
    next,
    back,
  };
}
