"use client"

import withHOC from "../../hoc/withHOC";
import { useCustomStoreContext } from "@/store/customContextStore/CustomContextStore";


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
           <div>Global-custom-context-store-counter:<b>{counter}</b></div>
           <button onClick={handleIncrease}>Plus</button>
           <button onClick={() => setCounter((counter) => counter - 1)}>Minus</button>
        </>
    )
}

export default withHOC(AlbumsPage);