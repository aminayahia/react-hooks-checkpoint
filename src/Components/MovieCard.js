import React from 'react'
import { Card } from 'react-bootstrap'
import StarRatingComponent from "react-star-rating-component";
const MovieCard = ({movie}) => {
    return (
        <Card style={{ width: '18rem', margin:"30px auto" }} >
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title> {movie.title} </Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <div className="movieRate">
          <StarRatingComponent name="rate" value={movie.rate} starColor="darkgoldenrod"/>
        </div>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
