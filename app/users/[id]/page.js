export default async function UserPage({ params }) {
    // Явно деструктурируем параметры через await
    const { id } = await params;
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
  
    return (
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
  }