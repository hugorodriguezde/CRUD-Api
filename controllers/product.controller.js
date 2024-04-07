const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try{
        let product;

        //creamos producto
        product = new Product(req.body);

        await product.save();
        res.send(product);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.editProduct = async (req, res) => {

    try{
        const {name, category, price} = req.body;
        let product = await Product.findById(req.params.id);

        if (!product){
            res.status(404).json({msg: 'Product doesn´t exist'});
        }

        product.name = name;
        product.category = category;
        product.price = price;

        product = await Product.findOneAndUpdate({_id: req.params.id}, product, {new: true});
        res.json(product);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.getProduct = async (req, res) => {
    try{
        let product = await Product.findById(req.params.id);

        if (!product){
            res.status(404).json({msg: 'Product doesn´t exist'});
        }

        res.json(product);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.deleteProduct = async (req, res) => {
    try{
        let product = await Product.findById(req.params.id);

    if (!product){
        res.status(404).json({msg: 'Product doesn´t exist'});
    }

    await Product.findOneAndDelete({_id: req.params.id});
    res.json({msg: 'Product deleted succesfully'})
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};