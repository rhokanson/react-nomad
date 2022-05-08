import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

function Detail () {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])

    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovie(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovie()
    }, [])
    return <div>
            {loading ? <h1>Loading...</h1> : 
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image}/>
            <h4>Year: {movie.year}</h4>
            <h4>Runtime: {movie.runtime}mins</h4>
            <h4>Rating: {movie.rating}</h4>
            <h4>Genres</h4>
            <ul>{movie.genres.map((g)=><li key={g}>{g}</li>)}</ul>
            <Link to="/">Back to Home</Link>


        </div>}
    </div>;
}

export default Detail;