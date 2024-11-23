export const metadata = {
    title: "Users", 
    description: "This is the contacts page", 
  };




const UsersPage = async () => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const contacts = await response.json();

    return (
        <>
         {console.log(contacts)}
            <div>Users</div>
        </>
    )
}

export default UsersPage;













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