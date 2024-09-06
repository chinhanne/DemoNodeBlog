class NewController {

    // [GET] /news
    index(req, res){
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res){
        res.send('News Details')
    }
}

// Giúp tạo ra một đối tượng duy nhất từ class NewController
module.exports = new NewController