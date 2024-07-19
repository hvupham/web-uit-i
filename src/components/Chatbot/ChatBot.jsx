import { useState } from "react";
import Bubble from "./Bubble";
import ChatForm from "./ChatForm";
import { Box } from "@chakra-ui/react";

export default function ChatBot() {
  const [show, setShow] = useState(false);

  const handleBubble = () => {
    setShow(!show);
  };

  const handleCloseBubble = () => {
    setShow(false);
  };
  return (
    <Box position="absolute" right="10px" bottom="10px">
      {show && <ChatForm handleCloseBubble={handleCloseBubble} />}
      <Bubble handleBubble={handleBubble} />
    </Box>
  );
}
