'use client'

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addMsg } from "@/store/dialogsSlice";



function DialogsPage() {
  const dispatch = useDispatch();
  const messagesDima = useSelector((state) => state.dialogs.messages.Dima);
  const [newMessageText, setNewMessageText] = useState('');


  const handeSendMessage = () => {
      dispatch(addMsg(newMessageText))
      setNewMessageText("")
  }



  return (
    <>
      {messagesDima.map((msg) => (<div key={msg.key}>{msg.message}</div>))}
      <input value={newMessageText} type="text" onChange={(e) => setNewMessageText(e.target.value)} />
      <button onClick={handeSendMessage}>send</button>
    </>
  )
}

export default DialogsPage;