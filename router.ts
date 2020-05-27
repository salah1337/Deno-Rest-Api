import { Router } from "https://deno.land/x/oak/mod.ts"
import { getProds, getProd, addProd, updateProd, deleteProd } from './controllers/products.ts'

const router = new Router()


router
.get('/api/products', getProds)
.get('/api/products/:id', getProd)
.post('/api/products', addProd)
.put('/api/products/:id', updateProd)
.delete('/api/products/:id', deleteProd)

export default router