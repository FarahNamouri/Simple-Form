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
export function AdressForm() {
    const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);
    return (
        <>
        <FormWrapper title="Addres">
          <FormControl>
            {/* handling our current and total steps : */}
            

            <FormLabel>Street</FormLabel>
            <Input autoFocus required type="text" />
            <FormLabel>City</FormLabel>
            <Input required type="text" />
            <FormLabel>State</FormLabel>
            <Input required type="text" />
            <FormLabel>Zip</FormLabel>
            <Input required type="number" />
          </FormControl>
          </FormWrapper>
        </>
    )
}