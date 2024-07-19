// // src/components/Messaging.jsx
// import React, { useState } from 'react';
// import { Box, Input, Button, VStack, HStack, Text, Avatar, Flex } from '@chakra-ui/react';
// import useMessaging from '../hooks/useMessaging';
// import useAuthStore from '../store/authStore';

// const Messaging = ({ recipientUserId }) => {
//   const authUser = useAuthStore((state) => state.user);
//   const { messages, loading, sendMessage } = useMessaging(authUser.uid, recipientUserId);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       sendMessage(newMessage);
//       setNewMessage('');
//     }
//   };

//   return (
//     <Box p={4} borderWidth="1px" borderRadius="lg" w="100%" h="100%">
//       <VStack spacing={4} align="stretch" h="100%">
//         <Box overflowY="auto" flex="1" p={2} borderWidth="1px" borderRadius="lg">
//           {loading ? (
//             <Text>Loading...</Text>
//           ) : (
//             messages.map((message) => (
//               <HStack key={message.id} align="start" bg={message.sender === authUser.uid ? 'blue.100' : 'gray.100'} p={2} borderRadius="md">
//                 <Avatar size="sm" name={message.sender} />
//                 <VStack align="start">
//                   <Text fontWeight="bold">{message.sender}</Text>
//                   <Text>{message.text}</Text>
//                 </VStack>
//               </HStack>
//             ))
//           )}
//         </Box>
//         <Flex>
//           <Input
//             placeholder="Type a message..."
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//           />
//           <Button onClick={handleSendMessage} colorScheme="blue" ml={2}>
//             Send
//           </Button>
//         </Flex>
//       </VStack>
//     </Box>
//   );
// };

// export default Messaging;