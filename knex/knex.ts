import { Knex, knex } from "knex";

export interface User {
  id: number;
  age: number;
  name: string;
}

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "compare-js-orm-lib",
  },
};

export const knexInstance = knex(config);

export const getUsers = async () => {
  try {
    const users = await knexInstance<User>("users").select("id", "age");
    return users;
  } catch (err) {
    // error handling
    console.error(err);
    return [];
  }
};
