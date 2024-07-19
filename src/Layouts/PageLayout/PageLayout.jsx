import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";
import ChatBot from "../../components/Chatbot/ChatBot";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const canRenderChatBot = pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Box position="relative">
      <Flex flexDir={canRenderNavbar ? "column" : "row"}>
        {/* Sidebar on the left */}
        {canRenderSidebar ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>
        ) : null}

        {/* Navbar */}
        {canRenderNavbar ? <Navbar /> : null}
        
        {/* The page content on the right */}
        <Box
          flex={1}
          w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
          mx={"auto"}
        >
          {children}
        </Box>
      </Flex>
      {canRenderChatBot ? (
        <Box position="sticky" bottom="0" right="0" m="4">
          <ChatBot />
        </Box>
      ) : null}
    </Box>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
