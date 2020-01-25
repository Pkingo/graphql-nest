import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemDTO } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';

@Resolver('Items')
export class ItemsResolver {
    constructor(private readonly itemService: ItemsService) { }

    @Query(() => [ItemDTO])
    async items(): Promise<ItemDTO[]> {
        return this.itemService.findAll()
    }

    @Mutation(() => ItemDTO)
    async createItem(@Args('input') input: ItemInput): Promise<ItemDTO> {
        return this.itemService.create(input);
    }

    @Mutation(() => ItemDTO)
    async updateItem(
        @Args('id') id: string,
        @Args('input') input: ItemInput,
    ): Promise<ItemDTO> {
        return this.itemService.update(id, input);
    }

    @Mutation(() => ItemDTO)
    async deleteItem(@Args("id") id: string): Promise<ItemDTO> {
        return this.itemService.delete(id);
    }

    @Query(() => String)
    async hello() {
        return "Hello world";
    }
}
