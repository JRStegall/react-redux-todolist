import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo } from '../actions';

const mapStateToProps = function(reduxState){
    console.log(reduxState);
    return {todos: reduxState.todos} ;
}

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);