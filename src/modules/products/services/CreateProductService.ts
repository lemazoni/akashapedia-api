import {ProductRepository} from "@modules/products/typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";
import Product from "@modules/products/typeorm/entities/Product";

interface IRequest{
    name: string;
    price: number;
    quantity: number;
}


class CreateProductService {
    public async execute({name, price , quantity}: IRequest): Promise<Product|undefined>{
        const productsRepository = ProductRepository;
        const productExists = await productsRepository.findByName(name);

        if(productExists){
            throw new AppError('Product name already exists');
        }

        const  product = productsRepository.create({
            name,
            price,
            quantity,
        });

        await productsRepository.save(product);

        return product;
    }
}

export  default  CreateProductService;