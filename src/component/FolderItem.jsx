import { ListItem, Text } from "@chakra-ui/react";
import { pxToRem } from "../utils/theme.utils";

export default function FolderItem({name}) {
    return (
        <ListItem
        _hover={{bg:'orange.200', borderRadius: pxToRem(5), cursor: 'pointer'}}>
            <Text pl={pxToRem(15)}>
                {name}
            </Text>
        </ListItem>
    )

}