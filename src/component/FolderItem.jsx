import { ListItem, Text } from "@chakra-ui/react";
import { atom, useRecoilState } from "recoil";
import { pxToRem } from "../utils/theme.utils";

export const folderState = atom({
    key: "folderState",
    default: ""
})

export default function FolderItem({name}) {
    const [folder, setFolderState] = useRecoilState(folderState);

    return (
        <ListItem bg={folder === name ? 'orange.300': ''} borderRadius={pxToRem(5)} cursor={'pointer'}
        _hover={{bg: folder !== name ? 'orange.200': ''}}
        onClick={() => {
            setFolderState(name)
        }}>
            <Text pl={pxToRem(15)}>
                {name}
            </Text>
        </ListItem>
    )

}