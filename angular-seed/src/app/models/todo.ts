export class Todo {
    private description: string;
    private priority: Number;
    private completed: boolean;

    constructor(description: string, priority: Number = 1, completed: boolean = false) {
        this.description = description;
        this.completed = completed;
        this.priority = priority;
    }
}
