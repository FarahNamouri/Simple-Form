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

type AddressData = {
  street: string
  city: string
  state: string
  zip: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AdressForm({ street, city, state, zip, updateFields}: AddressFormProps) {
    const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);
    return (
        <>
        <FormWrapper title="Addres">
          <FormControl>
            {/* handling our current and total steps : */}
            <FormLabel>Street</FormLabel>
            <Input 
            autoFocus
            required 
            type="text"  
            value={street} 
            onChange={e => updateFields({street: e.target.value})}
            />
            <FormLabel>City</FormLabel>
            <Input 
            required 
            type="text" 
            value={city} 
            onChange={e => updateFields({city: e.target.value})}
            />
            <FormLabel>State</FormLabel>
            <Input 
            required 
            type="text" 
            value={state} 
            onChange={e => updateFields({state: e.target.value})}
            />
            <FormLabel>Zip</FormLabel>
            <Input 
            required 
            type="number" 
            value={zip} 
            onChange={e => updateFields({zip: e.target.value})}
            />
          </FormControl>
          </FormWrapper>
        </>
    )
}