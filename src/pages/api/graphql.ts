import type { APIRoute } from 'astro'
import { drizzle } from 'drizzle-orm/d1'
import * as entriesSchema from '../../drizzle/schema/entries'
import { buildSchema } from 'drizzle-graphql'
import { createYoga } from 'graphql-yoga'

const handler: APIRoute = ({ locals, ...context }) => {
  const { request } = context
  const db = drizzle(locals.runtime.env.DB, { schema: { ...entriesSchema } })
  const { schema } = buildSchema(db)
  const { handleRequest } = createYoga({
    schema,
    graphqlEndpoint: '/api/graphql',
    graphiql: import.meta.env.DEV,
    fetchAPI: {
      Request: Request,
      Response: Response
    }
  })

  return handleRequest(request, context)
}

export { handler as POST, handler as GET }
export const prerender = false
