import { Resolvers } from "../../../generated-models";
import { AuthorService } from "../service/AuthorService";

// export const resolvers: (ctx: GraphQLModules.Context) => Resolvers = ({
//   injector,
// }) => {
//   const authorService: AuthorService = injector.get(AuthorService);

//   return {
//     Query: {
//       authors: () => authorService.getAllAuthor(),
//     },
//   };
// };

export const resolvers: Resolvers = {
  Query: {
    authors: (parent, args, context) => {
      console.log(parent);
      console.log(args);
      console.log(context);
      const authorService: AuthorService = context.injector.get(AuthorService);
      return authorService.getAllAuthor();
    },
  },
};

// users: (root: any, args: any, contex: any, info: any) => {
//   const authorService: AuthorService = contex.injector.get(AuthorService);
//   return authorService.getAllAuthor();
// },
