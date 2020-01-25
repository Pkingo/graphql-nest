import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) { }

  async create(createdUserDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createdUserDto);
    return await createdUser.save();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }
}
