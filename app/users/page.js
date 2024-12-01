import UsersPage from "./UsersPage";

export const metadata = {
    title: "Users", 
    description: "This is the contacts page", 
  };




const UsersPageContainer = async () => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: "no-store" });
  const users = await response.json();

  if (!response.ok) {
    return 'There was an error.'
  }

    return (
        <>
           <UsersPage users={users}/>
        </>
    )
}

export default UsersPageContainer;













  // export const getStaticProps = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  
  //   return {
  //     props: {
  //       contacts: data, 
  //       some: '2'
  //     },
  //   };
  // };