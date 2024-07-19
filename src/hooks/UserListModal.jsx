import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  List,
  ListItem,
  Avatar,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchUserDetails from "./fetchUserDetails"; // Ensure this path is correct

const UserListModal = ({ isOpen, onClose, title, userIds }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const fetchUsers = async () => {
        const fetchedUsers = await fetchUserDetails(userIds);
        setUsers(fetchedUsers);
      };
      fetchUsers();
    }
  }, [isOpen, userIds]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            {users.map((user) => (
              <ListItem key={user.uid}>
                <Flex alignItems="center" gap={4}>
                  <Avatar src={user.profilePicURL} />
                  <Text>{user.fullName}</Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Đóng
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// Add PropTypes validation
UserListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  userIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserListModal;