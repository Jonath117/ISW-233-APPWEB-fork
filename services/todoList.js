import  {observerMixin} from './mixin.js';

class TodoItem {
    constructor(text) {
        this.text = text;
    }
}

export class TodoList {
    #data = new Set();

    static instance = null;
    static {
        this.instance = new TodoList();
    }

    constructor() {
        if(TodoList.instance)
            throw new console.error("use get instance");
            
    }

    static getInstance() {
        return this.instance;
    }

    add (TodoItem) {
        const array = Array.from(this.#data);
        const todoExist = array.filter ((t) => t.text == TodoItem.text).length > 1;
        if(!todoExist){
            this.#data.add(TodoItem);
            this.notify();
        }
    }
    delete(TodoItem) {
        this.#data.delete(TodoItem);
        
    }

    find (TodoItem) {
        const array = Array.from(this.#data);
        return this.#data.find(t => t.text == text);
    }
}


Object.assign(TodoList.prototype, observerMixin);