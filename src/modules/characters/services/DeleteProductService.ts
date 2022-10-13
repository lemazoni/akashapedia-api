import {ProductRepository} from "@modules/products/typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";

interface IRequest{
    id: string;

}

class DeleteProductService {
    public async execute({id}: IRequest): Promise<string>{
        const productsRepository = ProductRepository;
        const product = await productsRepository.findOneBy({id: id});

        if(!product){
            throw new AppError('Product not found')
        }

        productsRepository.remove(product);

        return 'Product Deleted';
    }
}

export  default  DeleteProductService;
