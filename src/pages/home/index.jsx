
import MovieCard from "../../components/movie-card"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import './style.css'
import useMovies from "../../hooks/use-movies"

const HomePage = () => {
    const {results, nextPage, loading} = useMovies();

    return (
        <div className="homepage-container">
            <section className="movies-container">
                <Grid container spacing={2}>
                    {results.map((movie) => (
                        <Grid item key={movie.id}>
                            <MovieCard
                                title={movie.title}
                                imageURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        </Grid>
                    ))}
                </Grid>
                <Button disabled={loading} onClick={nextPage} variant="contained">Load More</Button>
            </section>

        </div>
    )
}

export default HomePage