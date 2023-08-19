import exp from "constants";

async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos" , {
    // cache:"default"
    next:{revalidate: 10}
  });
  return await response.json();
}

export const preloadTodos = () => {
  void getAllTodos()
}
const Todos = async () => {
  const todos = await getAllTodos();

  return (
    <div>
      <h2>Todos</h2>
   <div className="grid grid-cols-3 gap-4">
        {todos && Array.isArray(todos) &&
          todos.map((todo: any) => (
            <div className="border p-5 shadow-lg rounded-lg" key={todo.id}>
              <h4>{todo.title}</h4>
            </div>
          ))}
   </div>
    </div>
  );
};

export default Todos;
