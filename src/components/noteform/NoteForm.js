import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NoteForm.css'

class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state={
      newNoteContent:'',
    };

 this.handleUserEvent = this.handleUserEvent.bind(this);
 this.writeNote = this.writeNote.bind(this);
  }

  handleUserEvent(e){
    this.setState({
      newNoteContent: e.target.value,
    })
  }

  writeNote(){

    this.props.addNote(this.state.newNoteContent)


    this.setState({
      newNoteContent: '',
    })
  }

  render(props) {
    return (
      <div className="formWrapper">
          <input className="noteInput"
            placeholder="Écrivez ce que vous avez à faire !"
            value={this.state.newNoteContent}
            onChange={this.handleUserEvent}/>

            <button className="noteButton"
            onClick={this.writeNote}/>
      </div>
    )
  }
}
export default NoteForm
