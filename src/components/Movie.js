import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {
    return <div className={styles.movie}>
    <Link to={`movie/${id}`}><img src={coverImg} alt={title} className={styles.movie__img}/></Link>
    <h2 className={styles.movie__title}>
      <Link to={`movie/${id}`} className={styles.movie__link}>{title}</Link>
      </h2>
      <span className={styles.movie__year}>{year}</span>
    <p>{summary.length > 250 ? `${summary.slice(0,250)}...`: summary}</p>
    <ul className={styles.movie__genres}>{genres.map((g)=> <li className={styles.movie__genre} key={g}>{g}</li>)}</ul>
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