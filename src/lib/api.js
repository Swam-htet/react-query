// api functions start
import axios from "axios";

export async function fetchAllTodo() {
    let response = await axios.get("http://localhost:8000/api/todos");
    return response.data;
}

export async function createTodo({title, description}) {
    let body = {
        title: title,
        description: description,
        user_id: "33",
        completed: false
    }
    let response = await axios.post('http://localhost:8000/api/todos', body);
    return response.data;
}


// api function end
