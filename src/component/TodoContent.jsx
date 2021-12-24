import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { folderState } from "../component/FolderItem";
import { pxToRem } from "../utils/theme.utils";
import { folderTodoListState } from "./InputTodo";
import TableContent from "./TableContent";

export default function TodoContent() {
  const folder = useRecoilValue(folderState);
  const [folderTodoList, setFolderTodoList] = useRecoilState(folderTodoListState);
  const [isCheckList, setCheckList] = React.useState([]);
  React.useEffect(() => {
    setCheckList(Array.from(folderTodoList.data, () => false))
  }, [folderTodoList.data.length]);

  const isAllChecked = isCheckList.every(Boolean);
  const isIndeterminate = isCheckList.some(Boolean) && !isAllChecked;
  const handleCheck = (id,isCheck) => {
    setCheckList(prevCheckList => [...prevCheckList.slice(0,id), isCheck, ...prevCheckList.slice(id+1)]);
  }
  const handleChangeStatus = () => {
    setFolderTodoList(folderTodoList.data.map((ele,id) =>({...ele, isCompleted: (!ele.isCompleted && isCheckList[id])})))
  }
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
      <Flex direction={'row'} wrap={'nowrap'} alignSelf={'flex-start'} justify={'space-between'} mb={pxToRem(20)}>
        <Box>
          <Button h={pxToRem(40)} onClick={handleChangeStatus} isDisabled={!isCheckList.some(Boolean)}>Change Status</Button>
        </Box>
      </Flex>
        <Table variant="unstyled" size={'sm'}>
          <Thead borderBottom={`${pxToRem(2)} solid silver`}>
            <Tr>
              <Th p={pxToRem(5)}><Checkbox isChecked={isAllChecked} isIndeterminate={isIndeterminate} onChange={(e) => setCheckList(Array.from(folderTodoList.data, () => e.target.checked))}/></Th>
              <Th isNumeric p={pxToRem(5)}>Id</Th>
              <Th p={pxToRem(5)}>Todo</Th>
              <Th p={pxToRem(5)}>Created At</Th>
              <Th p={pxToRem(5)}>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {folderTodoList.data.map(({ ...rest }, idx) => (
              <TableContent {...rest} key={idx} id={idx+1} isChecked={isCheckList[idx]} setCheck={handleCheck}/>
            ))}
          </Tbody>
        </Table>
    </Flex>
  );
}
