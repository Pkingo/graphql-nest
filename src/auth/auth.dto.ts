import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AuthDTO {
  @Field()
  readonly access_token: string;
}
