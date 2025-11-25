// prisma.config.ts

// 1. Load environment variables using the 'dotenv' package you just installed
import 'dotenv/config' 

// 2. Import the official Prisma config helpers from 'prisma/config'
import { defineConfig, env } from 'prisma/config'

// Define a type for your environment variables for type safety
type Env = {
  OPENAPI_TTS_DB_URL: string
}

export default defineConfig({
  // Configure the database connection URL for CLI tools (db push, migrate)
  datasource: {
    url: env<Env>('OPENAPI_TTS_DB_URL'),
  },
  // Ensure the schema path is correct
  schema: 'prisma/schema.prisma',
  
  // You can also add other configurations here if needed
})