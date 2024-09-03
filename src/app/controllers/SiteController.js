const Course = require('../model/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    async index(req, res) {
        const courses = await Course.find({})
        const bestCourses = await Course.find({})
            .sort({price: -1})
            .limit(5)
        res.render('home', {
            courses: multipleMongooseToObject(courses),
            bestCourses: multipleMongooseToObject(bestCourses)
        })
    }
    login(req, res) {
        res.render('login')
    }
    handleLogin(req, res) {
        const { username, password } = req.body
        if (username === 'long' && password === 'longyeuhai') {
            console.log('Login successfully !')
            req.session.user = username
            res.redirect('/')
        } else {
            console.log('Login false !')
            req.flash('error', 'Username or password is invalid !')
            res.redirect('/login')
        }
    }
    user(req, res) {
        if(req.session.user) {
            res.render('user', {username: req.session.user})
        } else {
            console.log('You need login first !')
            req.flash('message', 'You need login first !')
            res.redirect('/login')
        }
    }
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log('Can not logout !')
                console.log(err)
                res.redirect('/')
            } else {
                console.log('Logout successfully !')
                res.redirect('/')
            }
        })
    }
}

module.exports = new SiteController()