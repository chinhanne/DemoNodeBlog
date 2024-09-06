class SiteController {

    // [GET] /home
    index(req, res){
        res.render('home');
    }

    // [GET] /search
    search(req, res){
        res.render('search');
    }
}

// Giúp tạo ra một đối tượng duy nhất từ class NewController
module.exports = new SiteController