const express = require('express');
const app = express();
const portNumber =  7890;
const productController = require('./controller/product.controller');
const categoryController = require('./controller/category.controller')

app.listen(portNumber, "10.7.10.14", () => {
    console.log('API run at', + portNumber)
});

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

// app.get('api/product', (req,res)=> {
//     productController.getProduct(req,res);
// })

// app.post('api/product', (req,res)=> {
//     productController.getProduct(req,res);
// })


app.get('api/category', (req,res)=> {
    categoryController.isertCategory(req,res);

})

app.post('api/category', (req,res)=> {
    categoryController.getCategory(req,res);
})




