// src/hooks/useMessaging.js
import { useState, useEffect } from 'react';
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useMessaging = (currentUserId, recipientUserId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const conversationId = [currentUserId, recipientUserId].sort().join('_');
    const q = query(
      collection(firestore, `conversations/${conversationId}/messages`),
      orderBy('timestamp')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUserId, recipientUserId]);

  const sendMessage = async (text) => {
    const conversationId = [currentUserId, recipientUserId].sort().join('_');
    try {
      await addDoc(collection(firestore, `conversations/${conversationId}/messages`), {
        text,
        sender: currentUserId,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return { messages, loading, sendMessage };
};

export default useMessaging;