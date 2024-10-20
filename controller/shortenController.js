import * as shortenService from "../services/shortenService.js"

export const getUrlInfo = async(req, res) =>{
    try {
        const {url} = req.params
        const result = await shortenService.getUrlInfo(url)
        res.json(result)
        
    } catch (error) {
        res.status(400).json({message: error.message}) 
    }
}

export const getUrlStats = async(req, res) =>{
    try {
        const {url} = req.params
        const result = await shortenService.getUrlInfo(url)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

export const shortenUrl = async(req, res) =>{
    try {
        const {url} = req.body
        const result = await shortenService.shortenUrl(url)
        res.status(201).json(result)
        
    } catch (error) {
        res.status(400).json({message: error.message}) 
    }
}

export const updateUrl = async(req, res) =>{
    try {
        const shortCode = req.params.url
        const {url} = req.body
        const result = await shortenService.updateUrl(shortCode, url)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(404).json({message: error.message}) 
    }
}

export const deleteUrl = async(req, res) =>{
    try {
        const {url} = req.params
        const result = await shortenService.deleteUrl(url)
        res.status(204).json(result)
        
    } catch (error) {
        res.status(404).json({message: error.message}) 
    }
}