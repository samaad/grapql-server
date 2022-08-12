import { createModule } from "graphql-modules";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "path";
import { UserService } from "./service/UserService";

export const UserModule = createModule({
  id: "UserModule",
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, "./schema/user.graphql")),
  resolvers: {
    Query: {
      users: (root: any, args: any, context: any, info: any) => {
        const userService: UserService = context.injector.get(UserService);

        return userService.getAllUser();
      },
    },
  },
  providers: [UserService],
});
