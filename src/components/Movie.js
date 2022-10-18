	
import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types';

const GENERIC_MOVIE_TITLE = "New Movie Title", GENERIC_MOVIE_YEAR ="New Movie Year",
GENERIC_MOVIE_Genre = "New Movie Genre", GENERIC_MOVIE_DESCRIPTION = "New Movie Description";
 
class Movie extends Component {
  /* Grab properties from the constructor, use properties in super
  then use thise elements in this.state
  
  */
  constructor(props) {
    /*Telling react there is a reference to each part of movie card. 
    Need these for handleEdit and handleSave functions.
    */

    super(props);
    this.titleContent = React.createRef();
    this.yearContent = React.createRef();
    this.genreContent = React.createRef();
    this.descriptionContent = React.createRef();
    this.state = {
      title: GENERIC_MOVIE_TITLE,
      year: GENERIC_MOVIE_YEAR,
      genre: GENERIC_MOVIE_Genre,
      description: GENERIC_MOVIE_DESCRIPTION,
      editMode: false
    }
  }
  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      year: this.yearContent.current.value,
      genre: this.genreContent.current.value,
      description: this.descriptionContent.current.value,
      editMode: false
    })
  }

  handleDelete () {
    this.props.deleteHandler(this.props.id);
  }
  
 
  render() {
    let titleElement, yearElement, genreElement, descriptionElement, buttonArea;
    if(this.state.editMode) {
      titleElement = <textarea ref={this.titleContent}
      className="title-textarea" defaultValue={this.state.title}></textarea>;

      yearElement = <textarea ref={this.yearContent}
      className="year-textarea" defaultValue={this.state.year}></textarea>;

      genreElement = <textarea ref={this.genreContent}
      className="genre-textarea" defaultValue={this.state.genre}></textarea>;

      descriptionElement = <textarea ref={this.descriptionContent}
      className="description-textarea" defaultValue={this.state.description}></textarea>;

      buttonArea = <div><button className="btn btn-light" onClick={this.handleSave.bind(this)}>Save</button></div>;

    } else {
      titleElement = <h5 className="card-title font-weight-bold">{this.state.title}</h5>;
      yearElement = <h6 className="card-subtitle mb-2 small float-right">{this.state.year} | {this.state.genre}</h6>;
      descriptionElement = <p className='mt-3'>{this.state.description}</p>;
      buttonArea = <div><button className="btn btn-light mr-2" onClick= {this.handleEdit.bind(this)}> Edit </button><button className="btn btn-danger" onClick={this.handleDelete.bind(this) }>Delete</button></div>;
    }

return (
  <div className="col-sm-6 p-0">
  <div className="card card-view w-75 h-60">
    <div className="card-body">
      {titleElement}
      {yearElement} 
      {genreElement}
      {descriptionElement}
      {buttonArea}

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      <label class="form-check-label" for="flexCheckDefault">Watched</label>
      </div>
      </div>
   </div>
  </div>

      );
  } 
}

// Makes a movie card that has not been defined with title/body show this title and body text//


Movie.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string,
  description: PropTypes.string
 
};
 //Says to render title as a string always//
export default Movie;