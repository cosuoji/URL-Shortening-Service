import ErrorWithStatus from "../exceptions/errorStatus.js";
import URL from "../database/schema/urlSchema.js";

export const getUrlInfo = async(url) =>{
    try {
    
        return {
            message: ""
        }

    } catch (error) {
        throw new ErrorWithStatus(error.message, 500)
    }
}

export const getUrlStats = async(url) =>{
    try {
    
        return {
            message: ""
        }

    } catch (error) {
        throw new ErrorWithStatus(error.message, 500)
    }
}
export const shortenUrl = async(url) =>{
    try {
    
        return {
            message: ""
        }

    } catch (error) {
        throw new ErrorWithStatus(error.message, 500)
    }
}

export const updateUrl = async(url) =>{
    try {
    
        return {
            message: ""
        }

    } catch (error) {
        throw new ErrorWithStatus(error.message, 500)
    }
}


export const deleteUrl = async(url) =>{
    try {
    
        return {
            message: ""
        }

    } catch (error) {
        throw new ErrorWithStatus(error.message, 500)
    }
}