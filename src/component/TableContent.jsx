import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Circle, Editable, EditableInput, EditablePreview, HStack, Td, Tr, useEditableControls, useEditableState } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { pxToRem } from "../utils/theme.utils";
import { folderTodoListState } from "./InputTodo";


export default function TableContent(props) {
  const { id, todo, createdAt, isCompleted } = props;
  const [folderTodoList, setFolderTodoList] = useRecoilState(folderTodoListState);
  function EditableControls() {
    const {isEditing,onCancel,onEdit,onSubmit} = useEditableState();
    return isEditing ? (
        <>
          <Circle size={pxToRem(30)} _hover={{bg: 'green.400'}}>
            <CheckIcon w={pxToRem(20)} h={pxToRem(20)} color= 'blackAlpha.500' mr={pxToRem(2.5)} _active={{w:'2', h:'2'}}/>
          </Circle>
          <Circle size={pxToRem(30)} _hover={{ bg: 'green.400'}} onClick={handleDelete}>
            <CloseIcon color='red.700' ml={pxToRem(2.5)} w={pxToRem(15)} h={pxToRem(15)} _active={{w:'2', h:'2'}} />
          </Circle>
        </>
      ): (
        <Circle size={pxToRem(30)} _hover={{bg: 'green.400'}} >
          <EditIcon w={pxToRem(20)} h={pxToRem(20)} color= 'blackAlpha.500' mr={pxToRem(2.5)} _active={{w:'2', h:'2'}}
          onClick={() => onEdit(true)}/>
        </Circle>
      )
  }
  const handleDelete = () => {
    setFolderTodoList([...folderTodoList.data.slice(0, id-1), ...folderTodoList.data.slice(id)])
  }
  return (
    <Tr _hover={{bg:'green.300', borderRadius: pxToRem(10), cursor: 'pointer'}}>
      <Td p={pxToRem(5)} isNumeric>{id}</Td>
      <Td p={pxToRem(5)}>
        <Editable defaultValue={todo}>
          <HStack>
          <EditablePreview/>
          <EditableInput />
          <EditableControls/>
          </HStack>
        </Editable>
        </Td>
      <Td p={pxToRem(5)}>{createdAt}</Td>
      <Td p={pxToRem(5)}>{isCompleted ? "Completed" : "Incomplete"}</Td>
      <Td p={pxToRem(5)} insetInline={'auto'}>
        <HStack>
        <Circle size={pxToRem(30)} _hover={{ bg: 'green.400'}} onClick={handleDelete}>
        <DeleteIcon color='red.700' ml={pxToRem(2.5)} w={pxToRem(20)} h={pxToRem(20)} _active={{w:'2', h:'2'}}/>
        </Circle>
        </HStack>
      </Td>
    </Tr>
  );
}
