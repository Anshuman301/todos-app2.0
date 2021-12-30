import { Box, Flex, Heading, Stack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { pxToRem, pxToVh, pxToVw } from "../utils/theme.utils";
import { ChatIcon } from "@chakra-ui/icons";
import TodoListFolder from "../component/TodoListFolder";
import TodoContent from "../component/TodoContent";
import InputTodo from "../component/InputTodo";
import React from "react";
import theme from "../theme/index.theme";
export default function TodosApp() {
  const {colorMode,toggleColorMode} = useColorMode();
  const isChecked = colorMode === 'dark';
  return (
    <Flex direction={"row"} height={"100vh"} overflow={"hidden"}>
      <Box w={pxToVw(280)} className='globalSideBg'>
        <Stack direction={"column"} align={"start"} ml={pxToVw(20)}>
          <Stack direction={"row"} align={"center"}>
            <ChatIcon
              w={pxToRem(30)}
              h={pxToRem(30)}
              pos={"relative"}
              top={pxToVh(5)}
              color={"#7928CA"}
            />
            <Text
              textStyle={'h2'}
              ml={`${pxToVw(5)} !important`}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip={"text"}
            >
              Todo
            </Text>
          </Stack>
        </Stack>
        <TodoListFolder />
      </Box>
      <Box flex={1}>
        <Flex
          direction={"column"}
          wrap={"nowrap"}
          align={"center"}
          justify={"flex-start"}
          h={pxToVh(205)}
          shadow={"base"}
        >
          <Box alignSelf={'flex-end'} mt={pxToVh(20)} mb={pxToVh(20)} mr={pxToVw(20)}>
            <Switch isChecked={isChecked} onChange={toggleColorMode}/>
          </Box>
          <Box w={pxToVw(380)}>
            <InputTodo />
          </Box>
        </Flex>
        <TodoContent />
      </Box>
    </Flex>
  );
}
