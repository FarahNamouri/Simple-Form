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
import { FormEvent } from "react";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<UserForm />, <AdressForm />, <AccountForm />]);

    function onSubmit(e: FormEvent) {
      e.preventDefault()
      next()
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
