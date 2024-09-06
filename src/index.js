
const { engine } = require('express-handlebars');
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = 3000

const route = require('./routes')

// Static file: xử lí các file tĩnh
app.use(express.static(path.join(__dirname, 'public')))

// Middleware xử lí việc submit từ form lên bằng method post
app.use(express.urlencoded({
  extended: true
}))
// Middleware xử lí các dữ liệu được gửi dưới dạng javascript lên
app.use(express.json())


// Template engine
app.engine('hbs', engine({
  extname: '.hbs' // cách đặt tên file ngắn gọn
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// HTTP Logger
app.use(morgan('combined'))


// Routes init 
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})