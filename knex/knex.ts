import { Knex, knex } from "knex";

interface CustomColumn {
  name: string;
  isInput: boolean;
  isOutput: boolean;
  shouldClear: boolean;
  field: string;
}

interface CustomTable {
  columns: CustomColumn[];
  name: string;
}

export type User = {
  id: number;
  age: number;
  name: string;
};

export const config: { [key: string]: Knex.Config } = {
  mysql: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "123",
      database: "compare-js-orm-lib",
    },
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: "unit.test.db",
    },
    debug: true,
    useNullAsDefault: true,
    migrations: {
      directory: "./knex/migrations",
    },
  },
};

export const getUsers = async () => {
  try {
    const users = await knex(config.mysql)<User>("users").select("id", "age");
    return users;
  } catch (err) {
    // error handling
    console.error(err);
    return [];
  }
};
