import TodoItem from './TodoItem';
import './TodoList.css';
import {useMemo, useState} from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ''
            ? todo
            : todo.filter((it) => it.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    };

    const analyzeTodo = useMemo(() => {
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todo]);

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    return (
        <div className='TodoList'>
            <h4>Todo List</h4>
            <div>
                <div>TotalCount: {totalCount}</div>
                <div>DoneCount: {doneCount}</div>
                <div>NotDoneCount: {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                className='searchBar'
                placeholder='검색어를 입력하세요'
            />
            <div className='list_wrapper'>
                {
                    getSearchResult().map((it) => (
                        <TodoItem
                            key={it.id}
                            {...it}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList;