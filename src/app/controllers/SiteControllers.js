class SiteControllers {
    index(req, res) {
        res.render('home')
    }
    login(req, res) {
        if (req.session.user) {
            res.redirect('/')
        } else {
            res.render('login')
        }
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
        if (req.session.user) {
            res.render('user', {username: req.session.user})
        } else {
            req.flash('message', 'You need login first !')
            res.redirect('/login')
        }
    }
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log('err')
                res.redirect('/login')
            } else {
                res.redirect('/login')
            }
        })
    }
}

module.exports = new SiteControllers()