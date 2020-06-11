import {gql} from "apollo-boost";

export const productsQuery = gql`
query productsQuery{
products 
{
    category,
    label,
    image
     }
    }
    `;