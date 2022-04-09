/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("store_items", (table) => {
    table.increments("item_id");
    table.text("name", 100).notNullable();
    table.text("image", 500);
    table.binary("pic", 1000)
    table.integer("price");
    table.text("description", 500);
    table.boolean("food").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("store_items");
};
