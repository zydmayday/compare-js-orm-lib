export const up = async (knex) => {
  await knex.schema.createTableIfNotExists("some_table", (table) => {
    table.increments();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("some_table");
};
