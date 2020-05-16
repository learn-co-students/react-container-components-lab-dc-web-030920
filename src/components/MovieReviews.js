import React from 'react'



    const MovieReview=(props)=>{
    
        const review = props.reviews.map(review => {

           return <React.Fragment>
            <p>{review.display_title}</p>
            <p>{review.headline}</p>
            <a href={review.link.url}>Article Link</a>
            <p>{review.summary_short}</p>
            </React.Fragment>
        })
   
      return(
            <div className='review-list'>{review}</div>
      )
    }



export default MovieReview