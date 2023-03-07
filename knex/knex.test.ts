import { config, getUsers, User } from "./knex";
import _ from "lodash";
import knex from "knex";

describe("test knex use mysql", () => {
  const mysqlKnex = knex(config.mysql);
  afterAll(async () => {
    await mysqlKnex.destroy();
  });
  test("test getUsers", async () => {
    const users = await getUsers();
    expect(users).toEqual([]);
  });

  test("test view built sql", () => {
    const sql = mysqlKnex<User>("users")
      .select("id")
      .where("age", ">", 20)
      .toSQL()
      .toNative();
    expect(sql).toEqual("");
  });

  test("test update multiple columns", async () => {
    await mysqlKnex<User>("users")
      .update({
        name: "zyd new",
        age: 40,
      })
      .where("id", 1);
  });
});

describe("test knex with sqlite3", () => {
  const sqlite3Knex = knex(config.sqlite3);
  afterAll(async () => {
    await sqlite3Knex.destroy();
  });

  test("test migration", async () => {
    await sqlite3Knex.migrate.latest();
    await sqlite3Knex.migrate.rollback({}, true);
  });
});
