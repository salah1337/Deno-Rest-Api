import { Application, Router } from "https://deno.land/x/oak/mod.ts"
const port = 6969

const app = new Application()

const router = new Router()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/api/products', ({ response }: {response: any}) => {
    response.body = 'sup'
})

console.log(`Listening on ${port}`);

await app.listen({ port })
