import React, {useRef, useReducer, useCallback, useMemo} from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: 'Study React',
        createDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: 'Study JavaScript',
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: 'Study HTML',
        createDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        content: 'Study CSS',
        createDate: new Date().getTime(),
    },
]

function reducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            return [action.newItem, ...state];
        case 'UPDATE': {
            return state.map((item) =>
                item.id === action.targetId ? {...item, isDone: !item.isDone} : item
            );
        }
        case 'DELETE':
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    const idRef = useRef(17);
    const [todo, dispatch] = useReducer(reducer, mockTodo);

    const onCreate = (content) => {
        dispatch({
            type: 'CREATE',
            newItem: {
                id: idRef.current,
                content,
                isDone: false,
                createDate: new Date().getTime(),
            },
        });
        idRef.current += 1;
    };

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId,
        });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: 'DELETE',
            targetId,
        });
    }, []);

    const memoizedDispatches = useMemo(() => {
        return { onCreate, onUpdate, onDelete }
    }, []);

    return (
        <div className="App">
            <Header />
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
