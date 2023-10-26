import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTodo} from "../../../lib/api";

export default function TodoInput() {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState('');

    let queryClient = useQueryClient();

    const {isError, data, mutate} = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries(['todos'])
        }
    })
    let titleOnChange = (e) => {
        setTitle(e.target.value);
    }

    let descriptionOnChange = (e) => {
        setDescription(e.target.value);
    }
    let addTodoHandler = () => {
        mutate({title: title, description: description});
        // queryClient.invalidateQueries(['todos'])
        setDescription("");
        setTitle("");
    }

    return <div className={'w-50 mb-4'}>

        {isError && "Error condition"}
        <input type="text"
               placeholder={"Enter title"}
               value={title}
               className={'form-control mb-2'}
               onChange={titleOnChange}/>

        <input type="text"
               placeholder={"Enter description"}
               value={description}
               className={'form-control mb-2'}
               onChange={descriptionOnChange}/>

        <button className={'btn btn-primary'} onClick={addTodoHandler}>Add</button>

    </div>
}