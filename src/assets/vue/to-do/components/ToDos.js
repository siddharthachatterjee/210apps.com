export default {
    name: 'ToDos',
    template: `
        <div>
            <ul>
                <li v-for = "(todo, i) in todos"
                    :key = "i"
                    class = 'todo'
                    @click.prevent = "$emit('todo-deleted', i)">

                    {{ todo }}
                </li>
            </ul>
            
        </div>
    `,
    props: {
        todos: Array
    },
}
