import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { pxToRem } from "../utils/theme.utils";
import { ChatIcon } from "@chakra-ui/icons";
import TodoListFolder from "../component/TodoListFolder";
import TodoContent from "../component/TodoContent";
import InputTodo from "../component/InputTodo";
export default function TodosApp() {
  return (
    <Flex direction={"row"} height={"100vh"} overflow={"hidden"}>
      <Box w={pxToRem(280)} className='globalSideBg'>
        <Stack direction={"column"} align={"start"} ml={pxToRem(20)}>
          <Stack direction={"row"} align={"center"}>
            <ChatIcon
              w={pxToRem(30)}
              h={pxToRem(30)}
              pos={"relative"}
              top={pxToRem(5)}
              color={"#7928CA"}
            />
            <Heading
              as="h6"
              ml={`${pxToRem(5)} !important`}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip={"text"}
            >
              Todo
            </Heading>
          </Stack>
        </Stack>
        <TodoListFolder />
      </Box>
      <Box flex={1}>
        <Flex
          direction={"row"}
          wrap={"nowrap"}
          align={"center"}
          justify={"center"}
          h={pxToRem(205)}
          shadow={"base"}
        >
          <Box w={pxToRem(380)}>
            <InputTodo />
          </Box>
        </Flex>
        <TodoContent />
      </Box>
    </Flex>
  );
}
