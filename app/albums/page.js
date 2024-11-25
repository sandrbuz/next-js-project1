"use client"

import withHOC from "../../hoc/withHOC";
import { useCustomStoreContext } from "@/customContextStore/CustomContextStore";


// export const metadata = {
//     title: "Albums", 
//     description: "This is the albums page", 
//   };

 function AlbumsPage(props) {
    const { counter, setCounter } = useCustomStoreContext();

  function handleIncrease(){
    setCounter(counter + 1)
  }


    return (
        <>
           <h1>Albums page</h1>
           <div>{counter}</div>
           <button onClick={handleIncrease}>Plus</button>
           <button onClick={setCounter}>Minus</button>
        </>
    )
}

export default withHOC(AlbumsPage);