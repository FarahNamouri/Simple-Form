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
export function AccountForm() {
    const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);
    return (
        <>
        <FormWrapper title="Account Creation">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input autoFocus required type="text" />
            <FormLabel>Password</FormLabel>
            <Input required type="text" />
            <FormLabel>Age</FormLabel>
            <Input type="number" />
          </FormControl>
          </FormWrapper>
        </>
    )
}