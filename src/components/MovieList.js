import React, {useState}from 'react';
import { Button, Card} from 'react-bootstrap';

const MovieList = (props) => {
    // const [likes, setLikes] = useState([movies.likes]);//
    const movies = props.move; //array of object
    
    return(
        <>
            {movies.map((movie, index) => 
            <Card className="c" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={movie.url}/>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.category}</Card.Text>
                    <Button variant="primary">👍 {movie.likes}</Button>
                    <Button className="ml-2" variant="primary">👎 {movie.dislikes}</Button>
                </Card.Body>
            </Card>)}
        </>

    )
}
export default MovieList;
