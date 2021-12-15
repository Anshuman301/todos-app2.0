import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { pxToRem } from "../utils/theme.utils";

export default function TodoListFolder() {
    const [listFolder, useListFolder] = React.useState([]);
    return (
        <Stack direction={"column"} pl={pxToRem(10)}>
            <Stack direction={"row"} align={"end"} justify={"space-between"}>
                                {/* 
                                Bring a text field and save icon
                                */}
            </Stack>
            <Stack direction={"column"} mt={pxToRem(20)}>
                <Text textDecoration={"underline"}>TodoFolder</Text>
            {
                listFolder.map((list, idx) => <Box key={idx} p={`${pxToRem(5)} 0`}>{list}</Box>)
            }
            </Stack>
        </Stack>
    )
}