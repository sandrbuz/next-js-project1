"use client"

import withHOC from "../../hoc/withHOC";
import { useCustomStoreContext } from "@/app/albums/CustomContextStore";


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
           {/* This counter is reset on page transitions due to the local context, unlike the redux counter.because redux wraps the entire application, and when switching between pages it is not erased. And the counter that is passed through the local context is erased */}
           <div>Global-custom-context-store-counter:<b>{counter}</b></div>
           <button onClick={handleIncrease}>Plus</button>
           <button onClick={() => setCounter((counter) => counter - 1)}>Minus</button>
        </>
    )
}

export default withHOC(AlbumsPage);