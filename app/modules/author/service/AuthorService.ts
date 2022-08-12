import { Injectable } from "graphql-modules";
import { Author } from "../../../generated-models";

@Injectable()
export class AuthorService {
  constructor() {}

  public async getAllAuthor(): Promise<Author[]> {
    return new Promise((resolve) => {
      return resolve([
        {
          firstName: "shoaib",
          id: 3,
          lastName: "demo user",
        },
      ]);
    });
  }
}
