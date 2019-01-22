import React, { Component } from 'react';
import Note from './components/Note'

import './App.css';

class App extends Component {
  state = {
    noteText: '',
    images: '',
    users: [],
    notes: [],
    pokemon: []
  }

  componentDidMount() {
    this.fetchGame()
  }

  fetchGame = () => {
    fetch('/users')
    .then(res => res.json())
    .then(users => {
      this.setState({
      users: users.users
    })
  })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ users: this.state.noteText }),
    }).then(() => this.setState({
              noteText: '',
        }));
  };

  updateNoteText(noteText) {
      this.setState({
        noteText: noteText.target.value
      })
    }

    addNote = () => {

      console.log(this.state.noteText)
      if (this.state.noteText === '') {return null}

      let notesArr = this.state.notes
      notesArr.push(this.state.notes)

      this.setState({
        noteText: ''
      })

      this.textInput.focus()
    }

    handleKeyPress = (event) => {
      if(event.key === 'Enter') {
      // let notesArr = this.state.notes
      // notesArr.push(this.state.noteText)
      const notesArr = [...this.state.notes, this.state.noteText]

      this.setState({
        notes: notesArr
      })
  }
}



deleteNote(index) {
      let notesArr = this.state.notes
      notesArr.splice(index, 1)
      this.setState({ notes: notesArr })
    }

  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
              deleteMethod ={() => this.deleteNote(key) } />
    })

    return (
      <div className="container">
        <div className="header">GameSwap</div>
        {notes}
        <h1>Users</h1>
          <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.username}</li>
          )}
          </ul>


      <div className="btn" onClick={this.addNote}><img src='./pokeball.png' alt ='pokeball' width='30px' /></div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='noteText'
            ref={((input) => {this.textInput = input})}
            className="textInput"
            value={this.state.noteText}
            onChange={noteText => this.updateNoteText(noteText)}
            onKeyPress={this.handleKeyPress}
            />
          </form>

      </div>


    );
  }
}

export default App;
