const projectRouter = require("express").Router()
const projectModel = require("../models/projectModel")
const UserModel = require("../models/userModel")

projectRouter.get('/', async (req, res)=>{
    try {
        let projects = await projectModel.find()
        res.render("main.twig",{
            projects: projects
        })
    } catch (error) {
        res.send(error)
    }
})

projectRouter.get('/main', async (req, res)=>{
    try {
        res.render("main.twig")
    } catch (error) {
        res.send(error)
    }
})


projectRouter.get('/login', async (req, res)=>{
    try {
        res.render("login.twig")
    } catch (error) {
        res.send(error)
    }
})


projectRouter.post('/login', async (req, res)=>{
    try {
        let user = await UserModel.findOne({mail: req.body.mail, password: req.body.password})
        if (user) {
            res.redirect('/projets')
        }else{

            res.redirect('/login')

        }
    } catch (error) {
        res.send(error)
    }
})
module.exports = projectRouter