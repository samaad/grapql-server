import { Resolvers } from "../../../generated-models";
import { UserService } from "../service/UserService";

export const resolvers: (ctx: any) => Resolvers = (ctx) => {
  console.log("ctx");
  console.log(ctx);

  const { injector } = ctx;
  console.log("==================");
  console.log(injector);

  const userService: UserService = injector.get(UserService);
  console.log("userservice", userService);

  return {
    Query: {
      users: () => userService.getAllUser(),
    },
  };
};
