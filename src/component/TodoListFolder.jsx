import { AddIcon } from "@chakra-ui/icons";
import { Box, Circle, Flex, FormControl, Input, List, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { pxToRem } from "../utils/theme.utils";
import FolderItem, { folderState } from "./FolderItem";

export default function TodoListFolder() {
    const [listFolder, setListFolder] = React.useState([]);
    const [folderName,setFolderName] = React.useState('');
    const [, setFolderState] = useRecoilState(folderState);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!folderName.trim())
            return; 
        setListFolder(prevFolder => [...prevFolder, folderName]);
        setFolderName('');
        setFolderState(folderName)
    }
    const handleChange = (e) => {
        setFolderName(e.target.value);
    }
    return (
        <Flex direction={"column"}>
            <FormControl onSubmit={handleSubmit} as='form'>
                <Stack direction={"row"} align={"end"} justify={"space-evenly"} ml={pxToRem(20)}>
                    <Input variant='flushed' value={folderName} placeholder='Enter todo folder name...' size={'xs'} w={pxToRem(200)} onChange={handleChange}  />
                    <Circle size={pxToRem(30)} bg={"orange"} color={"white"} cursor={"pointer"} _hover={{bg: 'orange.300'}}
                    _active={{bg: 'orange.200'}}
                    onClick={handleSubmit}>
                        <AddIcon w={pxToRem(20)} h={pxToRem(20)} _active={{w:'2', h: '2'}}/>
                    </Circle>
                </Stack>
            </FormControl>
            {
                listFolder.length ?
                (
                    <Flex direction={'column'}>
                        <Box pl={pxToRem(20)}>
                            <Text textDecoration={"underline"} mt={pxToRem(10)}>TodoFolder</Text>
                        </Box>
                        <Box>
                        <List p={`0 ${pxToRem(5)}`}>
                            {
                                listFolder.map((item, idx) => <FolderItem key={idx} name={item}/>)
                            }
                        </List>
                        </Box>
                    </Flex>
                ) :
                null
            }
        </Flex>
    )
}