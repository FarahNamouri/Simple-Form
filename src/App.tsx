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
import { UserForm } from "./UserForm";
import { AdressForm } from "./AdressForm";
import { AccountForm } from "./AccountForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstname: string
  lastname: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstname: "",
  lastname: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
 
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AdressForm {...data} updateFields={updateFields}/>, 
      <AccountForm {...data} updateFields={updateFields}/>]);

    function onSubmit(e: FormEvent) {
      e.preventDefault()
      if (!isLastStep) return next()
      alert("Successful account creation")
    }

  return (
    <div>
      <Center>
        <Box
          maxW="960px"
          mx="auto"
          border="1px"
          borderColor={"gray.200"}
          borderRadius={"lg"}
          p={"4"}
          m={"3"}
        >
          <form onSubmit={onSubmit}>
            <Box>
            {currentStepIndex + 1} / {steps.length}
            </Box>
            <Box>
              {step}
            </Box>
          <Stack spacing={4} p={"4"} direction="row">
              {/* if we're on the first page, the back button won't show : */}
              {!isFirstStep && (
                <Button type="button" onClick={back} colorScheme="blue">
                  Back
                </Button>
              )}
              <Button type="submit" colorScheme="blue">
              {isLastStep ? "Finish" : "Next"}
              </Button>
            </Stack>
            </form>
        </Box>
      </Center>
    </div>
  );
}

export default App;
