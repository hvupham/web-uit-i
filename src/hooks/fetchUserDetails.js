// src/hooks/fetchUserDetails.js
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const fetchUserDetails = async (userIds) => {
  try {
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("uid", "in", userIds));
    const querySnapshot = await getDocs(q);
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    return users;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return [];
  }
};

export default fetchUserDetails;