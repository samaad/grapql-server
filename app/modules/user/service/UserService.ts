import "reflect-metadata";
import { Injectable } from "graphql-modules";
import { User } from "../../../generated-models";

@Injectable()
export class UserService {
  constructor() {}

  public async getAllUser(): Promise<User[]> {
    console.log("sample user");

    return new Promise((resolve) => {
      return resolve([
        {
          email: "shoaib@gmail.com",
          id: "3",
        },
        {
          email: "shoaib@gmail.com",
          id: "4",
        },
      ]);
    });
  }
}
