import ToDos from './components/ToDos.js';

export default {
    template: `
        <div>
            <h1> To Do App </h1> 
            <form @submit.prevent = "addTodo">
                <input v-model = "todo" />
                <button @click.prevent = "addTodo">
                    Add 
                </button>
            </form>
            <to-dos :todos = "todos" @todo-deleted = "deleteTodo"></to-dos>
       </div>
    `,
    data() {
        return {
            todo: '',
            todos: []
        }
    },
    components: {
        ToDos
    },
    methods: {
        addTodo() {
            this.todos.unshift(this.todo)
            this.todo = ''
        },
        deleteTodo(key) {
            this.todos.splice(key, 1)
        }
    }
} 


