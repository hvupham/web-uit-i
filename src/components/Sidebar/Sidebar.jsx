import { Box, Button, Flex, Image, Link, Tooltip, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"gray.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <Image
            alt={"Logo Image"}
            src="/logo.png"
            justifyContent="center"
            alignItems="center"
            h={24}
          />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={1}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <Image alt={"Logo Image"} src="/logo-mobile.png" />
        </Link>

     

        {/* Sidebar items */}
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

   {/* Nút chuyển đổi giao diện */}
   <Button onClick={toggleColorMode} >
           {colorMode === "light" ? "Trắng" : "Đen"}
        </Button>
        {/* Log out */}
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            _hover={{ bg: "gray.200" }}
            borderRadius={6}
            p={1}
            w={{ base: 10, md: "full" }}
            mt={2}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              fontWeight="normal"
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Đăng xuất
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
