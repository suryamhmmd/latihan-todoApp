import React, { Component } from 'react'
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import './Apps.css'
import EditModal from './components/EditModal'
import DeleteModal from './components/DeleteModal'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Reading a book"
      },
      {
        id: 2,
        title: "workout training"
      },
    ],
    isEdit: false,
    editData : {
      id: "",
      title: "",
    },
    isDelete: false,
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      }
    })
  }

  openDeleteMOdal = () => {
    this.setState({
      isDelete:true,
    })
  }

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data
      }
    })
  }
  closeDeleteModal = () => {
    this.setState({
      isDelete: false
    })
  }
  closeModal = () => {
    this.setState({
      isEdit: false
    })
  }
  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }
  addTask = data => {
    const id = this.state.todos.length
    const newData = { 
      id : id+1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }
  update = () => {
    const { id, title } = this.state.editData
    const newData = { id, title }
    const newTodos = this.state.todos
    newTodos.splice((id-1), 1, newData)
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id:"",
        title:""
      }
    })
  }
  render() {
    const { todos } = this.state;
    return (
      <div className='app'>
        <Header />
        <div className='list'>
          <h3>Task List</h3>
          { todos.map(item => 
            <TodoItem 
            key={item.id} 
            todo={item} 
            open={this.openModal}
            openDel={this.openDeleteMOdal}
            />
          )}
        </div>
        <div className='input-form'>
          <FormInput add={this.addTask}/>
        </div>
        <EditModal 
          edit={this.state.isEdit} 
          close={this.closeModal} 
          change={this.setTitle}
          data = {this.state.editData}
          update = {this.update}
        />
        <DeleteModal 
          delete={this.state.isDelete}
          close={this.closeDeleteModal}
          del={this.deleteTask}
        />
      </div>
    )
  }
}
export default App
