import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors"
import graphqlHttp from "express-graphql";
import schema from "./schema/schema";

const uri  = "mongodb://Mikhail:mm201093@ds145293.mlab.com:45293/table_tennis_shop"//= "mongodb://localhost/test";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false  })
  .then((res) => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(Error, err.message);
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/graphql', graphqlHttp({ schema: schema, graphiql: true}) );
//const productsColl = productsController.getProducts();
//console.log({productsColl});
// // POST method route
// app.post('/products', ProductController.create);

// app.get("/products/:id",ProductController.read);

// app.delete("/products/:id", ProductController.delete);

// app.put("/products/:id", ProductController.update);


const port = 3005;
app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
