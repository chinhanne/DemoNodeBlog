const newsRouter = require('./news')
const siteRouter = require('./site')


function route(app) {

    app.use('/news', newsRouter)

    app.use('/', siteRouter)



    // app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.render('search'); // render gì thì nó lấy nội dụng đó đưa vào body main.handlebars
    // })
}

module.exports = route