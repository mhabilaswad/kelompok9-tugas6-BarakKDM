import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Volunteer extends BaseModel {
  @column({ isPrimary: true })
  public id: number | undefined

  @column()
  public nama: string | undefined

  @column()
  public npm: string | undefined

  @column()
  public alasan: string | undefined
}
