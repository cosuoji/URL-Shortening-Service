import * as shortenService from "../services/shortenService.js"

export const getUrlInfo = async(req, res) =>{
    try {
        const {url} = req.params
        const result = shortenService.getUrlInfo(url)
        res.json(result)
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

export const getUrlStats = async(req, res) =>{
    try {
        const {url} = req.params
        const result = shortenService.getUrlStats(url)
        res.json(result)
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

export const shortenUrl = async(req, res) =>{
    try {
        const {url} = req.body
        const result = shortenService.shortenUrl(url)
        res.json(result)
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

export const updateUrl = async(req, res) =>{
    try {
        const {url} = req.params
        const result = shortenService.updateUrl(url)
        res.json(result)
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

export const deleteUrl = async(req, res) =>{
    try {
        const {url} = req.params
        const result = shortenService.deleteUrl(url)
        res.json(result)
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}