import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
import { data } from "./data";

const sampleTodos: TodoItem[] = data.map (
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("JS 학습하기");
myTodoCollection.addTodo("숨쉬기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());