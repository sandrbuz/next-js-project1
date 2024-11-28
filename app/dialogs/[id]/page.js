'use client';

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addMsg } from "@/store/dialogsSlice";
import { useParams, useRouter } from "next/navigation";
import { redirect } from "next/navigation";

function DialogsPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [newMessageText, setNewMessageText] = useState('');
  const params = useParams();

  const chatNames = useSelector((state) => Object.keys(state.dialogs.messages));
  const chatName = chatNames[params.id - 1]; 

  // Если chatName не существует, перенаправляем на 404
  useEffect(() => {
    if (!chatName) {
      redirect('/404') // Или отобразите кастомную страницу ошибки
    }
  }, [chatName, router]);

  const messages = useSelector((state) => state.dialogs.messages[chatName] || []);

  const handleSendMessage = () => {
    if (!newMessageText.trim()) return;
    dispatch(addMsg({ chatName, message: newMessageText }));
    setNewMessageText('');
  };

  // Если chatName отсутствует, ничего не рендерим
  if (!chatName) return null;

  return (
    <>
      {messages.map((msg) => (<div key={msg.key}>{msg.message}</div>))}
      <input
        value={newMessageText}
        type="text"
        onChange={(e) => setNewMessageText(e.target.value)}
      />
      <button onClick={handleSendMessage}>send</button>
    </>
  );
}

export default DialogsPage;
