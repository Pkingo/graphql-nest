import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemDTO } from './item.dto';
import { ItemInput } from './items.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/_guards/graphql-auth.guard';

@Resolver('Items')
export class ItemsResolver {
    constructor(private readonly itemService: ItemsService) { }

    @Query(() => [ItemDTO])
    @UseGuards(GqlAuthGuard)
    async items(): Promise<ItemDTO[]> {
        return this.itemService.findAll()
    }

    @Mutation(() => ItemDTO)
    @UseGuards(GqlAuthGuard)
    async createItem(@Args('input') input: ItemInput): Promise<ItemDTO> {
        return this.itemService.create(input);
    }

    @Mutation(() => ItemDTO)
    @UseGuards(GqlAuthGuard)
    async updateItem(
        @Args('id') id: string,
        @Args('input') input: ItemInput,
    ): Promise<ItemDTO> {
        return this.itemService.update(id, input);
    }

    @Mutation(() => ItemDTO)
    @UseGuards(GqlAuthGuard)
    async deleteItem(@Args("id") id: string): Promise<ItemDTO> {
        return this.itemService.delete(id);
    }
}
