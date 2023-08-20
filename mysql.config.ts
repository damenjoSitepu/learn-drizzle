import { Config } from "drizzle-kit";
import "dotenv/config";

export default {
    schema: "./src/schemas/*",
    out: "./drizzle",
    driver: "mysql2",
    dbCredentials: {
        user: String(process.env.APP_DATABASE_USER),
        password: String(process.env.APP_DATABASE_PASSWORD),
        host: String(process.env.APP_DATABASE_HOST),
        database: String(process.env.APP_DATABASE_NAME),
        port: Number(process.env.APP_DATABASE_PORT)
    }
} satisfies Config;