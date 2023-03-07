import { Knex } from "knex";

export const up = async (knex: Knex) => {
  // Use the same table but different case.
  await knex.schema.table("Some_Table", (table) => {
    table.string("other_id").after("id");
    table.string("name").after("other_id");
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.table("Some_Table", (table) => {
    table.dropColumns("other_id", "name");
  });
};
