import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { folderState } from "../component/FolderItem";
import { pxToRem } from "../utils/theme.utils";
import { folderTodoListState } from "./InputTodo";
import TableContent from "./TableContent";

export default function TodoContent() {
  const folder = useRecoilValue(folderState);
  const [folderTodoList, setFolderTodoList] = useRecoilState(
    folderTodoListState
  );
  const text = !!folder
    ? "Todo folder selected. Now add todo in the folder"
    : "No todo folder selected. Please select first or create one.";
  if (!folderTodoList.data.length)
    return (
      <Center p={pxToRem(20)}>
        <Text>{text}</Text>
      </Center>
    );
  return (
    <Flex direction="column" m={`${pxToRem(10)} ${pxToRem(20)}`} align="center">
      {/* <Box alignSelf="flex-end">
        <Menu>
          <MenuButton
            h={pxToRem(40)}
            w={pxToRem(135)}
            as={Button}
            px={pxToRem(10)}
            rightIcon={<ChevronDownIcon pos="relative" top={pxToRem(3)} />}
          >
            Actions
          </MenuButton>
          <MenuList minWidth="max-content">
            <MenuItem as="li">Complete</MenuItem>
            <MenuItem as="li">Incomplete</MenuItem>
          </MenuList>
        </Menu>
      </Box> */}
        <Table variant="unstyled" size={'sm'}>
          <Thead borderBottom={`${pxToRem(2)} solid silver`}>
            <Tr>
              <Th isNumeric p={pxToRem(5)}>Id</Th>
              <Th p={pxToRem(5)}>Todo</Th>
              <Th p={pxToRem(5)}>Created At</Th>
              <Th p={pxToRem(5)}>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {folderTodoList.data.map(({ ...rest }, idx) => (
              <TableContent {...rest} key={idx} id={idx+1}/>
            ))}
          </Tbody>
        </Table>
    </Flex>
  );
}
