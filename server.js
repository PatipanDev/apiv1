const express = require('express');
const cors = require('cors');
const app = express();
const portNumber = 7890;
const productController = require('./controller/product.controller');
const categoryController = require('./controller/category.controller')
const jwtAuth = require("./authen")

app.use(express.json());  // เพิ่มตรงนี้

app.listen(portNumber, "10.7.10.18", () => {
    console.log('API run at', + portNumber)
});

app.use(cors());

app.get('/api/test', (req,res)=>{
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

app.get('/:xxx', (req,res)=>{
    const aaa = req.params.xxx;
    res.json({
        'status': 'ok',
        'message': 'Hello' + aaa
    })
})



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

app.post('/api/category', (req, res) => {
    categoryController.insertCategory(req, res);
});

app.put('/api/category/:id', (req, res)=>{
    categoryController.updateCategory(req, res)
})

app.delete('/api/category/:id', (req, res) => {
    categoryController.deleteCategory(req, res);
});

app.post('/api/login',(req,res) =>{
    console.log("req.body:", req.body); // 🐞 Debugging
    jwtAuth.setToken(req,res)
});





