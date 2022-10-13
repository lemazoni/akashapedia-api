import {ProductRepository} from "@modules/products/typeorm/repositories/ProductsRepository";
import Product from "@modules/products/typeorm/entities/Product";



class ListProductsService {
    public async execute(): Promise<Product[]>{
        const productsRepository = ProductRepository;
        const products = await productsRepository.find();
        return products;
    }
}

export  default  ListProductsService;
