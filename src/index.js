const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const now = require('./util/timeFormat')

const host = '127.0.0.1'
const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use((req, res, next) => {
    console.log(`${now()} - ${req.method} - ${req.url}`)
    next()
})

app.use(session({
    secret: 'longyeuhai',
    resave: false,
    saveUninitialized: true
}))

app.use(flash())
app.use((req, res, next) => {
    res.locals.error = req.flash('error')
    res.locals.message = req.flash('message')
    next()
})

const route = require('./routers/index')
route(app)

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})