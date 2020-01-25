import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UseGuards, UnauthorizedException } from "@nestjs/common";
import { GqlAuthGuard } from "src/_guards/graphql-auth.guard";
import { CurrentUser } from "src/_decorators/user.decorator";
import { AuthService } from "src/auth/auth.service";
import { UserDTO } from "src/user/user.dto";
import { UserInput } from "src/user/user.input";
import { UserService } from "src/user/user.service";
import { AuthDTO } from "./auth.dto";

@Resolver("Authentication")
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Query(() => UserDTO)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: UserDTO) {
    return this.userService.findOne(user.username);
  }

  @Mutation(() => AuthDTO)
  async login(
    @Args("user") { username, password }: UserInput
  ): Promise<{ access_token: string }> {
    await this.validateUser(username, password);
    const { access_token } = await this.authService.login(username);
    return { access_token };
  }

  @Mutation(() => UserDTO)
  async register(@Args("user") user: UserInput): Promise<UserDTO> {
    return this.userService.create(user);
  }

  async validateUser(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
  }
}
