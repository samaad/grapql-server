import { createModule } from "graphql-modules";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "path";
import { AuthorService } from "./service/AuthorService";

export const AuthorModule = createModule({
  id: "AuthorModule",
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, "./schema/*.graphql")),
  resolvers: loadFilesSync(join(__dirname, "./resolver/*.ts")),
  providers: [AuthorService],
});
