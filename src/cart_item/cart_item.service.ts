import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CartItem } from './model/cart_item.model';

@Injectable()
export class CartItemService {

    constructor(
      @InjectModel(CartItem)
      private cartItemModel: typeof CartItem
    ) {}
  create(createCartItemDto: CreateCartItemDto) {

    return this.cartItemModel.create(createCartItemDto)
  }

  findAll() {
    return this.cartItemModel.findAll({
      include: { all: true },
    });
  }

  findOne(id: number) {
    return this.cartItemModel.findByPk(id)
  }

  update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemModel.update(updateCartItemDto, {where : {id}})
  }

  remove(id: number) {
    return this.cartItemModel.destroy({where: {id}})
  }
}
