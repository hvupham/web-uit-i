import {
  Flex,
  Image,
  Box,
  FormControl,
  Input,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function ChatForm({ handleCloseBubble }) {
  const initialMessages = [
    {
      id: 1,
      text: "Tôi có thể giúp gì cho bạn?",
      isBot: true,
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    // Update state to show user's message
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Reset input field
    setInputValue("");

    // Send API request
    try {
      const response = await fetch("http://localhost:8080/engine/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ text: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Update state to show bot's response
      const botMessage = {
        id: messages.length + 2,
        text: data.response, // adjust according to your API response structure
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      bg="white"
      rounded="xl"
      border={"1px solid"}
      borderColor={"gray.300"}
      p={4}
      width={"400px"}
      maxHeight={"500px"}
      overflowY="auto"
      position="fixed"
      bottom="20px"
      right="20px"
      boxShadow="lg"
    >
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        <Flex alignItems="center">
          <Image
            borderRadius="full"
            boxSize="40px"
            src="chatbot.png"
            alt="chat bot"
            mr={3}
          />
          <Text fontSize="lg" fontWeight="bold">Chatbot</Text>
        </Flex>
        <CloseChatBot handleCloseBubble={handleCloseBubble} />
      </Flex>

      <VStack spacing={3} align="stretch">
        {messages.map((message) => (
          <Box
            key={message.id}
            alignSelf={message.isBot ? "flex-start" : "flex-end"}
            bg={message.isBot ? "gray.100" : "blue.100"}
            borderRadius="lg"
            p={3}
            maxWidth="80%"
          >
            <Text>{message.text}</Text>
          </Box>
        ))}
      </VStack>

      <FormControl as="form" onSubmit={handleSendMessage} mt={4}>
        <Flex>
          <Input
            placeholder="Nhập câu hỏi của bạn..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            bg="gray.50"
            border={0}
            _focus={{
              bg: "white",
              borderColor: "gray.300",
            }}
          />
          <Button colorScheme="blue" ml={2} type="submit">
            Gửi
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}

ChatForm.propTypes = {
  handleCloseBubble: PropTypes.func.isRequired,
};

const CloseChatBot = ({ handleCloseBubble }) => (
  <Button
    onClick={handleCloseBubble}
    variant="ghost"
    size="sm"
    _hover={{ bg: "gray.200" }}
  >
    <Image
      borderRadius="full"
      boxSize="20px"
      src="./public/close-button.svg"
      alt="close chat"
    />
  </Button>
);

CloseChatBot.propTypes = {
  handleCloseBubble: PropTypes.func.isRequired,
};