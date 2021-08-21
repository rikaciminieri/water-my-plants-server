
exports.up = function(knex) {
return knex.schema


.createTable('plants', tbl => {
tbl.increments('plant_id')
tbl.string('species', 128).notNullable()

tbl.string('nickname', 255)

tbl.string('h2oFrequency', 255).notNullable()

tbl.text('origins', 128)
})



.createTable('users', tbl => {
tbl.increments('user_id')
tbl.text('username', 128).unique().notNullable()

tbl.text('password').notNullable()

tbl.string('phoneNumber').notNullable().unique()
})
};



exports.down = function(knex) {
return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('plants')
};
