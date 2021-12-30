import { ListItem, Text } from "@chakra-ui/react";
import { atom, useRecoilState } from "recoil";
import { pxToRem, pxToVw } from "../utils/theme.utils";

export const folderState = atom({
  key: "folderState",
  default: ""
});

export default function FolderItem({ name }) {
  const [folder, setFolderState] = useRecoilState(folderState);

  return (
    <ListItem
      bg={folder === name ? "orange.200" : ""}
      borderRadius={pxToRem(5)}
      cursor={"pointer"}
      onClick={() => {
        setFolderState(name);
      }}
    >
      <Text pl={pxToVw(15)} textStyle={'p'} fontWeight={'bold'} layerStyle={'selected'}>{name}</Text>
    </ListItem>
  );
}
