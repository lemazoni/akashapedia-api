import Product from '../entities/Product'
import {AppDataSource} from "../../../../data-source";

export const ProductRepository = AppDataSource.getRepository(Product).extend({
    findByName(name: string) {
        return this.createQueryBuilder("product").where("product.name = :name", {name}).getOne()
    }
});
