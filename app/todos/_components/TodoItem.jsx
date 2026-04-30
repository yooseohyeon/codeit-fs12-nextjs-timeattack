const TodoItem = ({ todo }) => {
  return (
    <li className="py-4 border-b border-gray-300">
      <h2 className="text-lg font-semibold mb-4">{todo.title}</h2>
      <div className="text-gray-800">
        <p>설명: {todo.content}</p>
        <p>완료여부: {todo.completed ? "완료" : "미완료"}</p>
        <p>우선순위: {todo.priority}</p>
      </div>
    </li>
  );
};

export default TodoItem;
