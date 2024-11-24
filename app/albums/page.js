import withHOC from "../../hoc/withHOC";


export const metadata = {
    title: "Albums", 
    description: "This is the albums page", 
  };

 function AlbumsPage(props) {
    return (
        <>
           <h1>Albums page</h1>
        </>
    )
}

export default withHOC(AlbumsPage);