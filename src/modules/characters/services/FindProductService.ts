import {ProductRepository} from "@modules/products/typeorm/repositories/ProductsRepository";
import Product from "@modules/products/typeorm/entities/Product";
import AppError from "@shared/errors/AppError";

interface IRequest{
    id: string;

}

class FindProductService {
    public async execute({id}: IRequest): Promise<Product|null>{
        const productsRepository = ProductRepository;
        const product = await productsRepository.findOneBy({id: id});

        if(!product){
            throw new AppError('Product not found')
        }

        return product;
    }
}

export  default  FindProductService;
