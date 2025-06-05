import type { HttpContext } from '@adonisjs/core/http'
import Volunteer from '#models/volunteer'

export default class VolunteersController {
  async showForm({ view }: HttpContext) {
    return view.render('volunteers/register')  // render register.edge
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nama', 'npm', 'alasan'])
    await Volunteer.create(data)
    return response.redirect('/volunteers')
  }

async index({ view }: HttpContext) {
  const volunteers = await Volunteer.all()
  console.log('Data volunteers:', volunteers)  // log data sebelum di-render
  return view.render('volunteers/index', { volunteers })
}

}
