import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async showForm({ view }: HttpContext) {
    return view.render('users/register')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['full_name', 'email', 'password', 'npm', 'no_hp', 'alasan'])
    
    await User.create(data)
    return response.redirect('/volunteers')
  }

  async index({ view }: HttpContext) {
    const users = await User.all()
    return view.render('users/index', { users })
  }
}

