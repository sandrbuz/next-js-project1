'use client'

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addMsg } from "@/store/dialogsSlice";
import { useParams } from "next/navigation";



function DialogsPage() {

  const dispatch = useDispatch();
  const [newMessageText, setNewMessageText] = useState('');

  const params = useParams();

  const chatNames = useSelector((state) => Object.keys(state.dialogs.messages));
  const chatName = chatNames[params.id - 1]; 

  const messages = useSelector((state) => state.dialogs.messages[chatName] );


  const handeSendMessage = () => {
      dispatch(addMsg({chatName, message: newMessageText}))
      setNewMessageText("")
      console.log()
  }



  return (
    <>
      {messages.map((msg) => (<div key={msg.key}>{msg.message}</div>))}
      <input value={newMessageText} type="text" onChange={(e) => setNewMessageText(e.target.value)} />
      <button onClick={handeSendMessage}>send</button>
    </>
  )
}

export default DialogsPage;