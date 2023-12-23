const redux = require('redux');

// Action
const ADD_TODO= "ADD_TODO";
const TOGGLE_TODO= "TOGGLE_TODO";

// Action Creator
const addTodo = (text) => ({text, type:ADD_TODO});
const toggle_todo = (index) => ({index, type: TOGGLE_TODO});

// Initial State
const InitialState = {
    todo: []
}


// Reducer
function todoReducer(state=InitialState, action){
    switch(action.type){
        case ADD_TODO:
           return {
            ...state,
            todo: [
                ...state.todo, 
                {
                    text: action.text, 
                    completed: false
                }
            ]
           }
        case TOGGLE_TODO:
            return { 
                ...state,
            todo: state.todo.map((item, index) => 
                    index == action.index ? {
                    ...item, 
                    completed: !item.completed } : 
                    {...item})
           }
        default:
            return state
    }
}

// Creating store
const store = redux.createStore(todoReducer);

// Dispatching an action 
store.dispatch(addTodo("Go to gym in morning"));
store.dispatch(addTodo("Complete your Redux tutorial and understand every thing"));
store.dispatch(toggle_todo(0));
store.dispatch(toggle_todo(1));

// Get todos
console.log(store.getState());