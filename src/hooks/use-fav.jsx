import { useState, useEffect, useCallback } from "react";
import { movieAPIInstance } from "../api"

export const useFavMutation = () => {
    const[isLoading, setIsLoading] = useState(false)

    const markMarkAsFav = async (id, value = true) => {
        setIsLoading(true)
        
        const {data} = await movieAPIInstance.post(`account/21871203/favorite`, {
            media_type : "movie",
            media_id : id,
            favorite : value,
        });
        setIsLoading(false)
        return data;
    };

    return {mutate : markMarkAsFav, isLoading}
};

export const useGetFavMovies = () => {

        const [results, setResults] = useState([])
        const [page, setPage] = useState(1)
        const [loading, setLoading] = useState(false)

        const fetchData = useCallback(() => {
            setLoading(true)
            movieAPIInstance
                .get(`account/21871203/favorite/movies?page=${page}`)
                .then((response) => setResults(response.data.results))
                .finally(() => setLoading(false));
        }, [page]);
    
    
        useEffect(() => {
            fetchData()
        }, [fetchData]);
    
        const nextPage = () => {
            setPage(page + 1)
        };
    
        return {results, page, loading, nextPage, refetch : fetchData }
}