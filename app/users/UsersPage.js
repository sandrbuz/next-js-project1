import Link from "next/link";



const UsersPage = ({users}) => {

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
