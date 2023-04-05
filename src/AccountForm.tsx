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

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}


export function AccountForm({ email, password, updateFields}: AccountFormProps) {
    const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);
    return (
        <>
        <FormWrapper title="Account Creation">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input 
            autoFocus 
            required 
            type="text" 
            value={email}
            onChange={e => updateFields({email: e.target.value})}
            />
            <FormLabel>Password</FormLabel>
            <Input 
            required 
            type="text" 
            value={password}
            onChange={e => updateFields({password: e.target.value})}
            />
          </FormControl>
          </FormWrapper>
        </>
    )
}