import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Center,
    Stack,
  } from "@chakra-ui/react";
  import { useMultistepForm } from "./useMultistepForm";
import { FormWrapper } from "./FormWrapper";
export function UserForm() {
    const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);
    return (
        <>
        <FormWrapper title="User Details">
          <FormControl>
            {/* handling our current and total steps : */}
           

            <FormLabel>First Name</FormLabel>
            <Input autoFocus required type="text" />
            <FormLabel>Last Name</FormLabel>
            <Input required type="text" />
            <FormLabel>Age</FormLabel>
            <Input required type="number" />
            
          </FormControl>
          </FormWrapper>
        </>
    )
}