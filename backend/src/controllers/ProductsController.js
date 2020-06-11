import ProductModel from "./../models/products";
class ProductController {
    constructor(name) {

    }
    create(req, res) {
        console.log(req.body);
        const data = req.body;
        const product = new ProductModel({
            category: data.category,
            label: data.label,
            image: data.image,
        });

        product
            .save()
            .then(() => {
                console.log("ADDED");
                res.send({ status: "OK" });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    read(req, res) {
        ProductModel.findOne({ _id: req.params.id }).then(post => {
            if (!post) {
                res.send({ error: "not found" });
            } else {
                res.json(post);
            }
        });


    }

    update(req, res) {
        console.log(req.body);
        ProductModel.findOneAndUpdate(req.params.id, { $set: req.body }, (err) => {
            if (err) {
                res.send(err);
            } else {
                console.log(req.body);
                res.json({ status: "Updated" });
            }
        });
    }

    delete(req, res) {
        console.log(req.params);
        ProductModel.deleteMany({
            _id: req.params.id
        }).then(post => {
            if (post) {
                console.log("Deleted");
                res.json({ status: 'deleted' })
            } else {
                console.log("Error");
                res.json({ status: 'error' })
            }

        }).catch((err) => { console.log(err); });
    }

    async getProducts() {
        var array = await ProductModel.find().then(function(result) {
            return result;
        }).catch(err => err);
        console.log(array);
        return await array;
    }
}

export default ProductController;