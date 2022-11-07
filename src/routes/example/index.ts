import { FastifyPluginAsync } from "fastify"

interface IQuerystring {
  name: string;
}

interface IHeaders {
  name: string;
}



const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{
    Querystring: IQuerystring,
    Headers: IHeaders
  }>('/', async function (request, reply) {
    
    return request.query.name ||  'this is an example'
  })
}

export default example;
