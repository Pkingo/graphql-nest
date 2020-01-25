import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item } from "./item.interface";
import { ItemInput } from "./items.input";
import { ItemDTO } from "./item.dto";

@Injectable()
export class ItemsService {
  constructor(@InjectModel("Item") private readonly itemModel: Model<Item>) {}

  async create(createItemDto: ItemInput): Promise<ItemDTO> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async findAll(): Promise<ItemDTO[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<ItemDTO> {
    return await this.itemModel.findById(id).exec();
  }

  async delete(id: string): Promise<ItemDTO> {
    return await this.itemModel.findByIdAndDelete(id);
  }

  async update(id: string, item: ItemInput): Promise<ItemDTO> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
