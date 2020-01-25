import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ItemsModule } from "./items/items.module";
import { MongooseModule } from "@nestjs/mongoose";
import { GraphQLModule } from "@nestjs/graphql";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      context: ({ req }) => ({ req })
    }),
    ItemsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/nestgraphql"),
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
