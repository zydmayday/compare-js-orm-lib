import { getUsers, knexInstance, User } from "./knex";

describe("test knex", () => {
  test("test getUsers", async () => {
    const users = await getUsers();
    expect(users).toEqual([]);
  });

  test("test view built sql", () => {
    const sql = knexInstance<User>("users")
      .select("id")
      .where("age", ">", 20)
      .toSQL().toNative();
    expect(sql).toEqual("");
  });
});
