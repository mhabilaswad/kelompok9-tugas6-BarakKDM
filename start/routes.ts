import router from '@adonisjs/core/services/router'
import VolunteersController from '#controllers/volunteer_controller'

router.on('/').render('volunteers/register')

router.get('/register', [VolunteersController, 'showForm'])  // form register
router.post('/register', [VolunteersController, 'store'])    // proses form
router.get('/volunteers', [VolunteersController, 'index'])   // list volunteers