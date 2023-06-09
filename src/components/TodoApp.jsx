import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

    return (
        <>
            <h1>Tareas: {todosCount} - Pendientes: {pendingTodosCount}</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo= {handleDeleteTodo}
                        onToggleTodo= {handleToggleTodo}>   
                    </TodoList>
                </div>

                <div className="col-5">
                    <h4>Agregar tarea</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
                </div>
            </div>

        </>
    )
}
