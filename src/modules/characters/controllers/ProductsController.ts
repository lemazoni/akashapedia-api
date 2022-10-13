import {Request, Response} from "express";
import ListProductsService from "@modules/products/services/ListProductsService";
import product from "@modules/products/typeorm/entities/Product";
import findProductService from "@modules/products/services/FindProductService";
import createProductService from "@modules/products/services/CreateProductService";
import updateProductService from "@modules/products/services/UpdateProductService";
import DeleteProductService from "@modules/products/services/DeleteProductService";

export default class ProductsController {

    public async index(request: Request, response: Response): Promise<Response> {
        const listProducts = new ListProductsService();

        const products = await listProducts.execute();

        return response.json(products)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;

        const findProduct = new findProductService();

        const product = await findProduct.execute({id});

        return response.json(product);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const {name, price, quantity} = request.body;

        const createProduct = new createProductService();

        const product = await createProduct.execute({name, price, quantity})

        return response.json(product);


    }

    public  async update(request: Request, response: Response): Promise<Response>{

        const {name, price, quantity} = request.body;
        const {id} = request.params;

        const updateProduct = new updateProductService()

        const product = await  updateProduct.execute({id,name,price,quantity})

        return response.json(product);

    }

    public  async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        const deleteProduct = new DeleteProductService();

        const product = await  deleteProduct.execute({id});

        return  response.json(product);
    }
}
