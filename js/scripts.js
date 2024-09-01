const { createApp } = Vue;

createApp ({
    data(){
        return{
            todos: [
                {
                    text: "Fare la spesa",
                    done: true,
                },
                {
                    text: "Andare in palestra",
                    done: false,
                },
                {
                    text: "Dare da mangiare al gatto",
                    done: false,
                },
                {
                    text: "Uscire con gli amici",
                    done: true,
                },
                {
                    text: "Andare dal dottore",
                    done: false,
                },
                {
                    text: "Fare la doccia",
                    done: false,
                }
            ]
        }
    },

    methods: {
        removeTodo(i){
            this.todos.splice(i,1);
        }
    }
}).mount("#todo");