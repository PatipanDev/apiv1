const express = require('express');
const cors = require('cors');
const app = express();
const productController = require('./controller/product.controller');
const categoryController = require('./controller/category.controller')
const jwtAuth = require("./authen")
const userLogin = require('./controller/users.controller')
require('dotenv').config(); 


const portNumber = process.env.PORT;
const hostnode = process.env.HOSTNODE

app.use(express.json());  // เพิ่มตรงนี้

app.listen(portNumber, hostnode, () => {
    console.log('API run at', + portNumber)
});

app.use(cors());

app.get('/api/test',jwtAuth.authCheck, (req,res)=>{
    const id = req.query.id;
    const fac = req.query.faculty
    if(id != undefined && fac != undefined){
        res.json({
            'status': 'ok', 
            'ID': id,
            'Faculty': fac
        });
    }else{
        res.json({
            'status': 'ok',
            'message': 'Hello'
        })
    }   
    }
)

// app.get('/:xxx', (req,res)=>{
//     const aaa = req.params.xxx;
//     res.json({
//         'status': 'ok',
//         'message': 'Hello' + aaa
//     })
// })



app.post('/api/test', (req,res)=> {
    const body = req.body;
    // const m = body;
    console.log(body)
    res.json({
        'name': 'patipan'
    })
})



///category
app.get('/api/category/:id', (req,res)=> {
    categoryController.getCategorybyID(req,res);
})

app.get('/api/category', (req, res) => {
    categoryController.getCategory(req, res);
});

app.post('/api/category',jwtAuth.authCheck, (req, res) => {
    categoryController.insertCategory(req, res);
});

app.put('/api/category/:id',jwtAuth.authCheck, (req, res)=>{
    categoryController.updateCategory(req, res)
})

app.delete('/api/category/:id',jwtAuth.authCheck,(req, res) => {
    categoryController.deleteCategory(req, res);
});

//product
app.get('/api/product', (req, res) => {
    productController.getProduct(req, res);
});

app.get('/api/product/:id', (req,res)=> {
    productController.getProductbyID(req,res);
})

app.post('/api/product',jwtAuth.authCheck, (req, res) => {
    productController.insertProduct(req, res);
});

app.put('/api/product/:id',jwtAuth.authCheck, (req, res)=>{
    productController.updateProduct(req, res)
})

app.delete('/api/product/:id',jwtAuth.authCheck,(req, res) => {
    productController.deleteProduct(req, res);
});



//การล็อกอิน
app.post('/api/login',(req,res) =>{
    console.log("req.body:", req.body); // 🐞 Debugging
    jwtAuth.setToken(req,res)
});

app.get('/api/userprofile', jwtAuth.authCheck,(req,res) =>{
    jwtAuth.getUserProfile(req,res)
});

//การสมัครสมาชิก
app.post('/api/userregister', (req,res)=>{
    userLogin.register(req,res)
})





app.get('/:xxx',(req,res)=>{
    jwtAuth.authCheck(req,res)
});

app.get('/api/test/:xxx', jwtAuth.authCheck,(req,res)=>{
    let aaa= req.params.xxx;
    res.json({
        'status': 'ok',
        'message': 'Hello'+ aaa
    })
})





