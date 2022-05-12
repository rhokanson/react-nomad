import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}) {
    return <div className={styles.movie}>
    <Link to={`movie/${id}`}><img src={coverImg} alt={title} className={styles.movie__img}/></Link>
    <h2>
      <Link to={`movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary.length > 250 ? `${summary.slice(0,250)}...`: summary}</p>
    <ul>{genres.map((g)=> <li key={g}>{g}</li>)}</ul>
  </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;