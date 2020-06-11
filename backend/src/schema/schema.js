const graphql = require('graphql');
const Products = require('./../models/products');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;


// const products = [
// {id: "1", category: "1", label: "blade", image: "https://img.reelgood.com/content/movie/2c947f66-ba1e-4747-91a3-ab1432f6bb96/poster-780.webp"},
// {id: "2", category: "1", label: "blade", image: "https://img.reelgood.com/content/movie/2c947f66-ba1e-4747-91a3-ab1432f6bb96/poster-780.webp"},
// {id: "3", category: "1", label: "blade", image: "https://img.reelgood.com/content/movie/2c947f66-ba1e-4747-91a3-ab1432f6bb96/poster-780.webp"},
// {id: "4", category: "1", label: "blade", image: "https://img.reelgood.com/content/movie/2c947f66-ba1e-4747-91a3-ab1432f6bb96/poster-780.webp"}

// ]


const ProductType = new GraphQLObjectType({
    name: 'product',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        category: {
            type: GraphQLString
        },
        label: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        }
    })

});

const Mutation = new GraphQLObjectType({
    name: "Mutation", 
    fields:{
        addProduct: {
            type: ProductType, 
            args: {
                  category: {
                    type: GraphQLString
                },
                label: {
                    type: GraphQLString
                },
                image: {
                    type: GraphQLString
                }
            },
            resolve(parent, args){
                const product = new Products({
                    category: args.category,
                    label: args.label,
                    image: args.image
                });
                return product.save();
            }
        },
        deleteDirector: {
			type: ProductType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				return Products.findByIdAndRemove(args.id);
			}
		},
		updateDirector: {
			type: ProductType,
			args: {
                id: { type: GraphQLString },
                category: {type: new GraphQLNonNull(GraphQLString) },
                label: { type:  new GraphQLNonNull(GraphQLString) },
                image: { type:  new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent, args) {
				return Products.findByIdAndUpdate(
					args.id,
					{ $set: { category: args.category, label: args.label, image: args.image } },
					{ new: true },
				);
			}
		}
    }

})


const Query = new GraphQLObjectType({
    name: "Query", 
    fields: {
        product: {
            type: ProductType,
            args: {id: {type: GraphQLString}},            
            resolve(parent, args) {
                return Products.findById(args.id)
            }
        },
        products: {
            type: GraphQLList(ProductType),          
            resolve(parent, args) {
                console.log(Products);
                return Products.find({});
            },
        }
    }
});

module.exports = new GraphQLSchema({
    query:Query,
    mutation:Mutation
});


