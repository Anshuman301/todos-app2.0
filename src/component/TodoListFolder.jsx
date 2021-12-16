import { AddIcon } from "@chakra-ui/icons";
import { Box, Circle, Flex, FormControl, Input, List, ListItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../utils/theme.utils";
import FolderItem from "./FolderItem";

export default function TodoListFolder() {
    const [listFolder, setListFolder] = React.useState([]);
    const [folderName,setFolderName] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setListFolder(prevFolder => [...prevFolder, folderName]);
        setFolderName('');
    }
    const handleChange = (e) => {
        console.log(e.target);
        setFolderName(e.target.value);
    }
    return (
        <Flex direction={"column"}>
            <FormControl onSubmit={handleSubmit} as='form'>
                <Stack direction={"row"} align={"end"} justify={"space-evenly"} ml={pxToRem(20)}>
                    <Input variant='flushed' value={folderName} placeholder='Enter todo folder name...' size={'xs'} w={pxToRem(200)} onChange={handleChange}  />
                    <Circle size={pxToRem(30)} bg={"orange"} color={"white"} cursor={"pointer"} _hover={{bg: 'orange.300'}}
                    onClick={handleSubmit}>
                        <AddIcon w={pxToRem(20)} h={pxToRem(20)}/>
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