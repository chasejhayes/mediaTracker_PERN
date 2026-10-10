// Standardized response function

import { createMediaService, deleteMediaService, getAllMediasService, getMediaByIdService, updateMediaService } from "../models/mediaModel.js";

const handleResponse = ( res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data,
    })
};

export const createMedia = async (req, res, next) => {
    const { title, rating, dateFinished } = req.body;
    try {
        const newMedia = await createMediaService(title, rating, dateFinished);
        handleResponse(res, 201, "Media created successfully", newMedia)
    } catch (err) {
        next(err)
    }
};

export const getAllMedias = async (req, res, next) => {
    try {
        const Medias = await getAllMediasService();
        handleResponse(res, 200, "Medias fetched successfully", Medias)
    
    } catch (err) {
        next(err)
    }
};

export const getMediabyId = async (req, res, next) => {
    try {
        const Media = await getMediaByIdService(req.params.id);
        if(!Media) return handleResponse(res, 404, "Media not found");
        handleResponse(res, 200, "Media fetched successfully", Media)
    } catch (err) {
        next(err)
    }
}

export const updateMedia = async(req, res, next) => {
    const { title, rating, dateFinished } = req.body;
    try {
        const updatedMedia = await updateMediaService(req.params.id, title, rating, dateFinished);
        if(!updatedMedia) return handleResponse(res, 404, "Media not found");
        handleResponse(res, 200, "Media updated successfully", updatedMedia)
    } catch (err) {
        next(err)
    }
};

export const deleteMedia = async(req, res, next) => {
    try {
        const deletedMedia = await deleteMediaService(req.params.id);
        if(!deletedMedia) return handleResponse(res, 404, "Media not found");
        handleResponse(res, 200, "User deleted successfully", deletedMedia)
    } catch (err) {
        next(err)
        
    }


}


