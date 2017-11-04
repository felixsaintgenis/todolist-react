import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/notes/Note';
import NoteForm from './components/noteform/NoteForm';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.state={
      notes:[
        {id: 1, noteContent: "Note 1 is here"},
        {id: 2, noteContent: "Note 2 is here"},
        {id: 3, noteContent: "Note 3 is here"},
      ],
    }
  }


  addNote(note) {
      this.state.notes.push({id: this.state.notes.length+1, noteContent: note});
      this.setState({
        notes : this.state.notes
      })
  }
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesBody">
          {this.state.notes.map((note) => {
            return(
              <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
            )
          })
        }

      </div>
      <div className="notesFooter">
        <NoteForm addNote={this.addNote} />
      </div>
      </div>
    );
  }
}

export default App;
