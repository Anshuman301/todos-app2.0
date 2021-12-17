import { Box, Circle, Flex, FormControl, Heading, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { pxToRem } from "../utils/theme.utils";
import {AddIcon, ChatIcon} from "@chakra-ui/icons"
import TodoListFolder from "../component/TodoListFolder";
import TodoContent from "./TodoContent";
export default function TodosApp() {
    return (
        <Flex direction={"row"} height={'100vh'} overflow={'hidden'}>
            <Box w={pxToRem(280)} bgGradient='linear(to-tr, orange.100, orange.200)'>
                <Stack direction={"column"} align={"start"} ml={pxToRem(20)}>
                   <Stack direction={"row"} align={"center"}>
                        <ChatIcon w={pxToRem(30)} h={pxToRem(30)} pos={'relative'} top={pxToRem(5)} color={'#7928CA'}/>
                        <Heading as='h6' ml={`${pxToRem(5)} !important`}
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip={'text'}
                        >
                            Todo
                        </Heading>
                   </Stack>
                </Stack>
                <TodoListFolder/>
            </Box>
            <Box flex={1} bgGradient='linear(to-t, green.200, green.500)'>
                <Flex direction={'row'} wrap={'nowrap'} align={'center'} justify={'center'} h={pxToRem(205)} shadow={'base'}>
                    <Box w={pxToRem(380)}>
                    <FormControl as='form'>
                        <InputGroup variant={'filled'} size={'sm'} >
                            <Input placeholder="Enter todo job..." _focus={{borderRadius: pxToRem(5)}}/>
                            <InputRightElement children={
                            <Circle size={pxToRem(30)} 
                                bg={"orange"} 
                                color={"white"} 
                                cursor={"pointer"} 
                                _hover={{bg: 'orange.300'}}
                                _active={{bg: 'orange.200'}}>
                                    <AddIcon w={pxToRem(20)} h={pxToRem(20)} _active={{w: '2', h: '2'}}/>
                                </Circle>}
                            />
                        </InputGroup>
                    </FormControl>
                    </Box>
                </Flex>
                <TodoContent/>
            </Box>
        </Flex>
    )
}