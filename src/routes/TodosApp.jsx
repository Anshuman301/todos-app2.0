import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { pxToRem } from "../utils/theme.utils";
import {ChatIcon} from "@chakra-ui/icons"
import TodoListFolder from "../component/TodoListFolder";
export default function TodosApp() {
    return (
        <Flex direction={"row"} height={'100vh'}>
            <Box w={pxToRem(220)} p={pxToRem(20)}>
                <Stack direction={"column"} align={"start"}>
                   <Stack direction={"row"} align={"center"} pl={pxToRem(10)}>
                        <ChatIcon w={pxToRem(30)} h={pxToRem(30)} pos={'relative'} top={pxToRem(5)}/>
                        <Heading as='h6' ml={`${pxToRem(5)} !important`}>Todo</Heading>
                   </Stack>
                </Stack>
                <TodoListFolder/>
            </Box>
        </Flex>
    )
}