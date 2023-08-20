import { mysqlTable, serial, varchar, boolean } from "drizzle-orm/mysql-core";

const chartOfAccountSchema = mysqlTable("chart_of_accounts", {
    id: serial("id").primaryKey().autoincrement(),
    name: varchar("name", {
        length: 50
    }),
    isActive: boolean("isActive")
});

export { chartOfAccountSchema };