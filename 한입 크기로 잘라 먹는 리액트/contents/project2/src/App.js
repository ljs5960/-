import {useRef, useReducer} from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

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
    {
        id: 4,
        isDone: false,
        content: 'Study TypeScript',
        createDate: new Date().getTime(),
    },
    {
        id: 5,
        isDone: false,
        content: 'Study Node.js',
        createDate: new Date().getTime(),
    },
    {
        id: 6,
        isDone: false,
        content: 'Study Express.js',
        createDate: new Date().getTime(),
    },
    {
        id: 7,
        isDone: false,
        content: 'Study MongoDB',
        createDate: new Date().getTime(),
    },
    {
        id: 8,
        isDone: false,
        content: 'Study MySQL',
        createDate: new Date().getTime(),
    },
    {
        id: 9,
        isDone: false,
        content: 'Study PostgreSQL',
        createDate: new Date().getTime(),
    },
    {
        id: 10,
        isDone: false,
        content: 'Study GraphQL',
        createDate: new Date().getTime(),
    },
    {
        id: 11,
        isDone: false,
        content: 'Study Apollo',
        createDate: new Date().getTime(),
    },
    {
        id: 12,
        isDone: false,
        content: 'Study Prisma',
        createDate: new Date().getTime(),
    },
    {
        id: 13,
        isDone: false,
        content: 'Study Nest.js',
        createDate: new Date().getTime(),
    },
    {
        id: 14,
        isDone: false,
        content: 'Study Next.js',
        createDate: new Date().getTime(),
    },
    {
        id: 15,
        isDone: false,
        content: 'Study Gatsby',
        createDate: new Date().getTime(),
    },
    {
        id: 16,
        isDone: false,
        content: 'Study Webpack',
        createDate: new Date().getTime(),
    }
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

    const onUpdate = (targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId,
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: 'DELETE',
            targetId,
        });
    };

    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
