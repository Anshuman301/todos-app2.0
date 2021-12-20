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
    if (!todoList[folder])
      set(todoListState, { ...todoList, [folder]: {data: newValue}});
    else
      set(todoListState, {
        ...todoList,
        [folder]: {data: newValue}
      });
  }
});
export default function InputTodo() {
  const folder = useRecoilValue(folderState);
  const [folderTodoList, setFolderTodoList] = useRecoilState(
    folderTodoListState
  );
  const [input, setInput] = React.useState("");
  console.log(folder);
  console.log(folderTodoList);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setFolderTodoList([...folderTodoList.data,{
      todo: input.trim(),
      createdAt:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
      isCompleted: false
    }]);
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
