import { createApplication } from "graphql-modules";
import { AuthorModule } from "./author";
import { UserModule } from "./user";

console.log(UserModule);
console.log(AuthorModule);

export const application = createApplication({
  modules: [AuthorModule, UserModule],
});
