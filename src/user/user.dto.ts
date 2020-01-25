import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserDTO {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly username: string;
}
