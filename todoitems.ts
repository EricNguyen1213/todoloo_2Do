
export interface Todo {
    id: number;
    userId: number;
    userName: string;
    title: string;
    desc: string;
    deadline: number;
    priority: number;
};

export let todoList: Todo[] = [
    {   id: 1, 
        userId: 1213, 
        userName: "Eric Nguyen", 
        title: "Milestone 2", 
        desc: "create that ToDo item", 
        deadline: 1000,
        priority: 2     }
];

export const isValidTodo = (todo: Todo) => {
    return (
        typeof todo === 'object' &&
        'id' in todo && typeof todo.id === 'number' &&
        'userId' in todo && typeof todo.userId === 'number' &&
        'userName' in todo && typeof todo.userName === 'string' &&
        'title' in todo && typeof todo.title === 'string' &&
        'desc' in todo && typeof todo.desc === 'string' &&
        'deadline' in todo && typeof todo.deadline === 'number' &&
        'priority' in todo && typeof todo.priority === 'number'
    );
}
