import { Hono } from 'hono'
import { posts } from './posts'
import { storage } from './storage'
import { auth } from './auth'

const app = new Hono().basePath('/api')


app.get('/', (c) => {
  return c.text('Bienvenido a mi nano-servicio /api/posts')
})


app.route('/', posts)
app.route('/', storage)
app.route('/', auth)

export default app
