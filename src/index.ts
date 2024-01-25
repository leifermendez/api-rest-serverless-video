import { Hono } from 'hono'
import { posts } from './posts'

const app = new Hono().basePath('/api')


app.get('/', (c) => {
  return c.text('Bienvenido a mi nano-servicio /api/posts')
})

/**
 * inject de tus modulos/servicios
 */
app.route('/', posts)

export default app
