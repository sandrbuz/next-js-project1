import Link from "next/link";

export const metadata = {
    title: "Users", 
    description: "This is the contacts page", 
  };




const UsersPage = async () => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: "no-store" });
  const users = await response.json();

    return (
        <>
            <h1>Users:</h1>
            <p>SSR dynamic routing</p>
            {users.map((user)=>{
              return <Link href={`/users/${user.id}`} key={user.name}>{user.name}</Link>
            })}
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