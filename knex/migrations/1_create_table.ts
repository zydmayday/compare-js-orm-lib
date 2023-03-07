import { Knex } from "knex";

export const up = async (knex: Knex) => {
  await knex.schema.createTableIfNotExists("some_table", (table) => {
    table.increments();
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTableIfExists("some_table");
};
