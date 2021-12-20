import { Td, Tr } from "@chakra-ui/react";

export default function TableContent(props) {
  const { id, todo, createdAt, isCompleted } = props;
  return (
    <Tr key={createdAt}>
      <Td>{id}</Td>
      <Td>{todo}</Td>
      <Td>{createdAt}</Td>
      <Td>{isCompleted ? "Completed" : "Incomplete"}</Td>
    </Tr>
  );
}
