const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN

/** @type { import("drizzle-kit").Config } */
export default {
  dialect: 'sqlite', // "mysql" | "sqlite" | "postgresql"
  schema: './src/drizzle/schema/**.ts',
  out: './src/drizzle/migrations',
  driver: 'd1-http',
  dbCredentials: {
    databaseId: '6b984b99-2542-4069-b4fb-2e73623f0a7c',
    accountId: CLOUDFLARE_ACCOUNT_ID,
    token: CLOUDFLARE_API_TOKEN
  }
}
