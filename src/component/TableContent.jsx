import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Checkbox, Circle, HStack, Td, Tr } from "@chakra-ui/react";
import { atom, useRecoilState } from "recoil";
import { pxToRem, pxToVw } from "../utils/theme.utils";
import { folderTodoListState } from "./InputTodo";

export const editTodoState = atom({
  key: "editTodoState",
  default: undefined
})

export default function TableContent(props) {
  const { id, todo, createdAt, isCompleted, isChecked,setCheck } = props;
  const [folderTodoList, setFolderTodoList] = useRecoilState(folderTodoListState);
  const [, setEditTodoState] = useRecoilState(editTodoState); 
  const handleDelete = () => {
    setFolderTodoList([...folderTodoList.data.slice(0, id-1), ...folderTodoList.data.slice(id)])
  }
  return (
    <Tr _hover={{bg:'green.300', borderRadius: pxToRem(10), cursor: 'pointer'}}>
      <Td p={pxToRem(5)}><Checkbox isChecked={isChecked} onChange={(e) => setCheck(id-1, e.target.checked)}/></Td>
      <Td p={pxToRem(5)} isNumeric>{id}</Td>
      <Td p={pxToRem(5)}>{todo}</Td>
      <Td p={pxToRem(5)}>{createdAt}</Td>
      <Td p={pxToRem(5)}>{isCompleted ? "Completed" : "Incomplete"}</Td>
      <Td p={pxToRem(5)} insetInline={'auto'}>
        <HStack>
          <Circle size={pxToRem(30)} _hover={{bg: 'green.400'}} onClick={() => setEditTodoState(id -1)}>
            <EditIcon w={pxToRem(20)} h={pxToRem(20)} color= 'blackAlpha.500' mr={pxToRem(2.5)} _active={{w:'2', h:'2'}}/>
          </Circle>
          <Circle size={pxToRem(30)} _hover={{ bg: 'green.400'}} onClick={handleDelete}>
            <DeleteIcon color='red.700' ml={pxToVw(2.5)} w={pxToRem(20)} h={pxToRem(20)} _active={{w:'2', h:'2'}}/>
          </Circle>
        </HStack>
      </Td>
    </Tr>
  );
}
