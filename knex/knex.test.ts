import { getUsers, knexInstance, User } from "./knex";
import _ from "lodash";

describe("test knex", () => {
  test("test getUsers", async () => {
    const users = await getUsers();
    expect(users).toEqual([]);
  });

  test("test view built sql", () => {
    const sql = knexInstance<User>("users")
      .select("id")
      .where("age", ">", 20)
      .toSQL()
      .toNative();
    expect(sql).toEqual("");
  });

  test("test update multiple columns", async () => {
    await knexInstance<User>("users")
      .update({
        name: "zyd new",
        age: 40,
      })
      .where("id", 1);
  });
});
