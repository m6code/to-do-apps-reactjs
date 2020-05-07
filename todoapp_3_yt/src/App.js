import React from 'react';
import './App.css';
import ListItems from './components/ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


library.add(faTrash);

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);

  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const nuItems = [...this.state.items, newItem];
      this.setState({
        items: nuItems,
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
  }

  delete(key) {
    const filterItems = this.state.items.filter(item =>
      item.key !== key)
    this.setState({
      items: filterItems
    })
  }

  update(text, key){
    const items = this.state.items;
    items.map(item => {
      if(item.key === key){
        item.text = text;
      }
    })
    this.setState({
      items: items,
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input
              type='text'
              placeholder='Enter Text'
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type='submit'>Add Todo</button>
          </form>
        </header>
        <ListItems items={this.state.items}
          delete={this.delete} 
          update ={this.update}/>
      </div>
    )
  }
}
