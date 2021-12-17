import { Center, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { folderState } from "../component/FolderItem";
import { pxToRem } from "../utils/theme.utils";

export default function TodoContent() {
    const folder = useRecoilValue(folderState);
    const text = !!folder ? "Todo folder selected. Now add todo in the folder" : "No todo folder selected. Please select first or create one.";
    return (
        <Center p={pxToRem(20)}>
            <Text>{text}</Text>
        </Center>
    )
}