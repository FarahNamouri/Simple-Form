import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Text } from '@chakra-ui/react'

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ title, children}: FormWrapperProps) {
    return <>
    <Text fontWeight={"bold"} fontSize={['48px', '45px']} m={"0"} mb={"2"} align={"center"}>{title}</Text>
    <Box display={"grid"} gap={"1rem .5rem"} gridTemplateColumns={"auto minmax(auto, 400px)"} justifyContent={"flex-start"}>
        {children}
    </Box>
    </>


}