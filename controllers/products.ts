import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Prod } from '../types.ts'

let prods: Prod[] = [
    {
        id: "1",
        name: "Prod O", 
        desc: "Prod O wassup", 
        price: 69.99
    },
    {
        id: "2",
        name: "Prod B", 
        desc: "Prod B wassuuup", 
        price: 399.99
    },
    {
        id: "3",
        name: "Prod H", 
        desc: "Prod H wabalabadubdubd", 
        price: 1337.99
    },
]

const getProds = ({ response }: { response: any}) => {
    response.body = {
        success: true, 
        data: prods
    }
}

const getProd = ({ params, response }: { params: {id: string},response: any}) => {
    const prod: Prod | undefined = prods.find(p => p.id === params.id)

    if( prod ){
        response.status = 200
        response.body = {
            success: true, 
            data: prod
        }
    }else{
        response.status = 404
        response.body = {
            success: false, 
            msg: 'Prod not found.'
        }
    }
}

const addProd = async ({ request, response }: { request: any, response: any}) => {
    const body = await request.body()

    if ( !request.hasBody ){
        response.status = 400
        response.body = {
            success: false, 
            msg: 'No data'
        }
    }else{
        const prod: Prod = body.value
        response.body = {
             body
        }
        // prod.id = v4.generate()
        // prods.push(prod)
        // response.status = 201
        // response.body = {
        //     success: true, 
        //     data: prod
        // }
    }
}

const updateProd = ({ response }: { response: any}) => {
  
}

const deleteProd = ({ response }: { response: any}) => {
  
}

export { getProds, getProd, addProd, updateProd, deleteProd }