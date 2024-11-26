"use client"


import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/counterSlice";




const UsersPage = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value);



    return (
        <>
            <h1>Redux-counter:</h1>
            <div>{counter}</div>
            <button onClick={()=>dispatch(increment())}>plus</button>
            <button onClick={()=>dispatch(decrement())}>minus</button>
        </>
    )
}

export default UsersPage;