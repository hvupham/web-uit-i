// message.js
import { Button, Flex, Tooltip } from "@chakra-ui/react";
import { FiMessageSquare } from "react-icons/fi"; 

const Message = () => {
  return (
    <Tooltip
      hasArrow
      label={"Tin nhắn"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        _hover={{ bg: "gray.200" }}
        borderRadius={6}
        p={1}
        w={{ base: 10, md: "full" }}
        mt={"auto"}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <FiMessageSquare size={25} />
        <Button
          display={{ base: "none", md: "block" }}
          variant={"ghost"}
          fontWeight="normal"
          _hover={{ bg: "transparent" }}
        >
          Tin nhắn
        </Button>
      </Flex>
    </Tooltip>
  );
};

export default Message;
