import { Image, Box } from "@chakra-ui/react";

export default function Bubble({ handleBubble }) {
  return (
    <Box onClick={handleBubble} float="right" cursor={"pointer"}>
      <Image
        borderRadius="full"
        boxSize="80px"
        src="chatbot.png"
        alt="Chat bot"
      />
    </Box>
  );
}
