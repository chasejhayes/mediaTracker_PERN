// Standardized response function

import { createMovieService, deleteMovieService, getAllMoviesService, getMovieByIdService, updateMovieService } from "../models/movieModel";

const handleResponse = ( res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data,
    })
};

export const createMovie = async (req, res, next) => {
    const { title, rating, dateFinished } = req.body;
    try {
        const newMovie = await createMovieService(title, rating, dateFinished);
        handleResponse(res, 201, "Movie created successfully", newMovie)
    } catch (err) {
        next(err)
    }
};

export const getAllMovies = async (req, res, next) => {
    try {
        const movies = await getAllMoviesService();
        handleResponse(res, 200, "Movies fetched successfully", movies)
    
    } catch (err) {
        next(err)
    }
};

export const getMoviebyId = async (req, res, next) => {
    try {
        const movie = await getMovieByIdService(req.params.id);
        if(!movie) return handleResponse(res, 404, "Movie not found");
        handleResponse(res, 200, "Movie fetched successfully", movie)
    } catch (err) {
        next(err)
    }
}

export const updateMovie = async(req, res, next) => {
    const { title, rating, dateFinished } = req.body;
    try {
        const updatedMovie = await updateMovieService(req.params.id, title, rating, dateFinished);
        if(!updatedMovie) return handleResponse(res, 404, "Movie not found");
        handleResponse(res, 200, "Movie updated successfully", updateMovie)
    } catch (err) {
        next(err)
    }
};

export const deleteMovie = async(req, res, next) => {
    try {
        const deletedMovie = await deleteMovieService(req.params.id);
        if(!deletedMovie) return handleResponse(res, 404, "Movie not found");
        handleResponse(res, 200, "User deleted successfully", deleteMovie)
    } catch (err) {
        next(err)
        
    }


}


