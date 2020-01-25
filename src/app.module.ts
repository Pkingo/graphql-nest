import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    ItemsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/nestgraphql")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
