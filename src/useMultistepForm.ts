import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    // track what step we're on :
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
        setCurrentStepIndex(i => {
            // if I am in the last page :
            if (i >= steps.length - 1) return i
            return i + 1
        })
    }

    function back() {
        setCurrentStepIndex(i => {
            //I'm in the first step :
            if (i <= 0) return i
            return i - 1
        })

    }

    function goTo(index: number) {
        setCurrentStepIndex(index);
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
    }
}