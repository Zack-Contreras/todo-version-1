import React, { Component } from 'react';
import { FABButton, Icon, Button } from 'react-mdl';



class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      list: [],
      lineThrough: false
    };



  }

  handleChange(input) {
    this.setState(
      {value: input}
    );
  }
  addTodo(todo) {
    console.log(todo);
    let listArray = this.state.list;
    listArray.push(todo);

    this.setState({
      list: listArray,
      value: ''
    });
    console.log(this.state.list);
  }
  // May use later
  changeLine() {
    this.setState({lineThrough: !this.state.lineThrough});
  }
  // dont change above

  deleteHandler = (todoIndex) => {
    const todos = [...this.state.list];
    todos.splice(todoIndex, 1);
    this.setState({
      list: todos
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.list.length > 6) {
      alert('Woah too many there boi');
      return false;
    } else {
      return true;
    }
  }
  render () {
    return (
      <div className='dayContainer'>
        <h1>{this.props.day}</h1>
        <input type='text' value={this.state.value} placeholder="ToDo Item..." onChange={(e) => this.handleChange(e.target.value)} />
        {/*<button onClick={() => this.addTodo(this.state.value)}>Submit</button>*/}
        <FABButton onClick={() => this.addTodo(this.state.value)} mini colored ripple>
          <Icon name="add" />
        </FABButton>

        <ul>
          {this.state.list.map( (val , index) =>
            <li key={index}>
              <p style={{textDecoration: this.state.lineThrough ? 'line-through' : ''}}>{val}</p>
              {/*<button onClick={() => this.deleteHandler(index)}>X</button>*/}
              <Button onClick={() => this.deleteHandler(index)} raised accent ripple>Remove</Button>
              <hr className='horizLine' />
            </li> )}
        </ul>
      </div>
    );
  }
}

export default TodoInput;
