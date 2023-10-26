export default function TodoList({data}) {
    return <div>
        <h3>Todo list</h3>
        {
            data.map((item, index) => <div className={'card m-2 bg-light p-4'} key={index}>{JSON.stringify(item)}</div>)
        }
    </div>
}