import { AddIcon } from "@chakra-ui/icons";
import {
  Circle,
  FormControl,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { pxToRem } from "../utils/theme.utils";
import { folderState } from "./FolderItem";
import { editTodoState } from "./TableContent";

export const todoListState = atom({
  key: "todoListState",
  default: {}
});

export const folderTodoListState = selector({
  key: "folderTodoListState",
  get: ({ get }) => {
    const folder = get(folderState);
    const todoList = get(todoListState);
    return todoList[folder] || {data: []};
  },
  set: ({ set, get }, newValue) => {
    const folder = get(folderState);
    const todoList = get(todoListState);
    set(todoListState, { ...todoList, [folder]: {data: newValue}});
  }
});
export default function InputTodo() {
  const folder = useRecoilValue(folderState);
  const [folderTodoList, setFolderTodoList] = useRecoilState(
    folderTodoListState
  );
  const [editTodo, setEditTodo] = useRecoilState(editTodoState);
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef(null);
  console.log(editTodo);
  React.useEffect(() =>{
    if(!isNaN(editTodo)) {
      setInput(folderTodoList.data[editTodo].todo);
      inputRef.current.focus();
    }
  }, [editTodo])
  React.useEffect(() => {
    if(folder)
      inputRef.current.focus();
  }, [folder])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newValue = {
      todo: input.trim(),
      createdAt:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
      isCompleted: false
    };
    if(!isNaN(editTodo)) {
      setFolderTodoList([...folderTodoList.data.slice(0, editTodo), newValue,...folderTodoList.data.slice(editTodo+1)])
      setEditTodo(undefined);
    }
    else
    setFolderTodoList([...folderTodoList.data, newValue]);
    setInput("");
  };
  return (
    <FormControl as="form" onSubmit={handleSubmit} isDisabled={!folder}>
      <InputGroup variant={"filled"} size={"sm"}>
        <Input
          placeholder="Enter todo job..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          _focus={{ borderRadius: pxToRem(5) }}
          ref={inputRef}
        />
        <InputRightElement
          children={
            <Circle
              size={pxToRem(30)}
              bg={"orange"}
              color={"white"}
              cursor={"pointer"}
              _hover={{ bg: "orange.300" }}
              _active={{ bg: "orange.200" }}
              onClick={handleSubmit}
            >
              <AddIcon
                w={pxToRem(20)}
                h={pxToRem(20)}
                _active={{ w: "2", h: "2" }}
              />
            </Circle>
          }
        />
      </InputGroup>
    </FormControl>
  );
}
