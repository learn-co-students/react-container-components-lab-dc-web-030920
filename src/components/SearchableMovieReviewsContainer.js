import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

    constructor(){
        super()
        this.state={
            reviews: [],
            searchTerm : null
        }
    }

    handleSearch = (e)=>{
        e.preventDefault()
        // debugger
        const input = e.target.children[0].value
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=GDe84OdJXDNP1ZyHzeReYwpdLqqYXpwI&query=${input}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews : data.results,
                searchTerm : input
            })
        })
        e.target.reset()
    }


    render(){

        const reviewLi = this.state.reviews.map(review =>{
            return <React.Fragment className='ui searched container'> 
            <li>
             <p>{review.display_title}</p>
             <p>{review.headline}</p>
             <a href={review.link.url}>Article Link</a>
             <p>{review.summary_short}</p>
             </li>
             <br></br>
        </React.Fragment>
        }
    )
    

        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSearch}>
                    <input placeholder='search movies'/>
                    <button value='submit'>Search</button>
                </form>
                <div id='search-container'>
                   { this.state.input !== null ? 
                   <React.Fragment>
                    <h3>You searched for <em>{this.state.searchTerm}</em></h3>
                    <ul>
                        {reviewLi}
                    </ul>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <br></br>
                    <h4>Search for a review </h4>
                    </React.Fragment>
                    }
                    
                </div>
            </div>

        )
    }

}

export default SearchableMovieReviewsContainer