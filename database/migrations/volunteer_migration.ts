import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Volunteers extends BaseSchema {
  protected tableName = 'volunteers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama').notNullable()
      table.string('npm').notNullable().unique()
      table.text('alasan').notNullable()
      table.datetime('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.datetime('updated_at', { useTz: true }).notNullable().defaultTo(this.now())

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
