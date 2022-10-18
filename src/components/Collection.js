
import React, {Component} from 'react';
import '../css/Collection.css';
import Movie from'./Movie';
//why Movie from ./Movie because Movies can have many classes but we specifically want Movie class.//

class Collection extends Component {
    // constructor find and fetch info before the page is loaded.//
   
    constructor() {
        super();
        //reach into parent and get information//

        this.state = {
            movies: []
        }
    }
/* Creating a variable called movies and telling to go inside our constructer object
    access this.state.movies and add to the end of the array the compnents: title, year
    genre, description
*/
    addMovie () {
        this.state.movies.push({
               id: Date.now()
            });
        /*Tellign react we are updating the movies state defined as let movies 
        to the newly updated list and shows the notes after page refresh
        */
        this.setState({
                movies: this.state.movies
            });
    }

    deleteMovie (id) {
        let newMovieArr = this.state.movies;
        newMovieArr.map((movie, index) => {
            if(id === movie.id) {
                newMovieArr.splice(index, 1);
            }
        });
        this.setState(
            {
                movies: newMovieArr
            }
           
        );

    }


render() {
//Tells react this is what is going to be returned//
    return (
    //Always have a return function where JSX code will be written//
    /*Putting map function where we want new movie card to appear. 
    Go through array of movies and everytime you go through movies array, 
    save that movie and return it.
    *On click, go to parent element which is the render, then going to addMovie function
    then "binding" added note to this add button */
    <div>
       <div className="div-collection container">
            <div className="row">
        
        {
             this.state.movies.map(movie => {
                return <Movie key={movie.id} id={movie.id} deleteHandler={this.deleteMovie.bind(this)} />          
            })
        }
           
            </div>
            <div>
            
            <button className="btn btn-danger" onClick={this.addMovie.bind(this)}>Add</button>
            </div>
        </div>
        </div>
        );
    }
}

export default Collection; 