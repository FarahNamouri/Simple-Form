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

type UserData = {
  firstname: string
  lastname: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({ firstname, lastname, age, updateFields}: UserFormProps) {

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);

  return (
    <>
      <FormWrapper title="User Details">
        <FormControl>
          {/* handling our current and total steps : */}

          <FormLabel>First Name</FormLabel>
          <Input 
            autoFocus 
            required 
            type="text" 
            value={firstname} 
            onChange={e => updateFields({firstname: e.target.value})}
          />
          <FormLabel>Last Name</FormLabel>
          <Input 
            required 
            type="text" 
            value={lastname}
            onChange={e => updateFields({lastname: e.target.value})}
          />
          <FormLabel>Age</FormLabel>
          <Input 
            required 
            type="number" 
            value={age}
            onChange={e => updateFields({age: e.target.value})}
          />
        </FormControl>
      </FormWrapper>
    </>
  );
}
