import ErrorWithStatus from "../exceptions/errorStatus.js";
import URL from "../database/schema/urlSchema.js";

export const getUrlInfo = async(url) =>{
    try {
        
        const retrievedUrl = await URL.find({shortCode: url})
        return {
            message: retrievedUrl[0]
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
        let id
        const all = await URL.find()
        let randomNumber = Math.random().toString(36).slice(6)
        let usedRandomChecker = await URL.find({shortcode: randomNumber})

        if(usedRandomChecker.length === 0){
            randomNumber = Math.random().toString(36).slice(6)
        }
        
        if(all.length === 0){
            id = "1"
        } else{
           id = (Number(all[all.length - 1].id) + 1).toString()
        }

        const newUrl = new URL({id:id, url: url, shortCode: randomNumber, access: 0})
        await newUrl.save()

        return {
           newUrl
        }

    } catch (error) {
        throw new ErrorWithStatus(error.message, 400)
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