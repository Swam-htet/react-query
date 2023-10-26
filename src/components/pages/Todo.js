import TodoList from "../UI/Todo/TodoList";
import {useQuery} from "@tanstack/react-query";
import TodoInput from "../UI/Todo/TodoInput";
import {fetchAllTodo} from "../../lib/api";


export default function Todo() {
    let {data, isError, error, isLoading, status} = useQuery({
        queryFn: fetchAllTodo,
        queryKey: ['todos'],
        
    });

    if (isLoading) {
        return <div>
            <h3>Loading ... </h3>
        </div>
    }
    if (isError) {
        return <div>
            <h3>{JSON.stringify(error.message)}</h3>
        </div>
    }
    if (status === 'success') {
        return <div className={'container'}>
            <h1>Todo</h1>

            <TodoInput/>

            <TodoList data={data}/>
        </div>
    }
}