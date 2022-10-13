import {ProductRepository} from "@modules/products/typeorm/repositories/ProductsRepository";
import Product from "@modules/products/typeorm/entities/Product";
import AppError from "@shared/errors/AppError";

interface IRequest{
    id: string;
    name: string;
    price: number;
    quantity: number;
}

class UpdateProductService {
    public async execute({id, name, price, quantity}: IRequest): Promise<Product>{
        const productsRepository = ProductRepository;
        const product = await productsRepository.findOneBy({id: id});

        if(!product){
            throw new AppError('Product not found')
        }

        const productExists = await productsRepository.findByName(name);

        if(productExists && name != product.name){
            throw new AppError('Product name already exists');
        }

        product.name = name;
        product.price = price;
        product.quantity = quantity;

        await productsRepository.save(product);

        return product;
    }
}

export  default  UpdateProductService;
