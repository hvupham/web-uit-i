import { Box, Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons"; // Import Chakra UI's bell icon

const Notifications = () => {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "gray.200" }}
        borderRadius={6}
        p={2}
        w={{ base: 15, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <BellIcon size={35}  color={colorMode === "dark" ? "white" : "black"} /> {/* Adjust icon color based on theme */}
        <Box display={{ base: "none", md: "block" }}>Thông báo</Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;