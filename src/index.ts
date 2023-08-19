import App from "./app";
import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/validations/validationEnv";
import "@/utils/interfaces/validationEnv";

validateEnv();

const app = new App(
    String(process.env.APP_API_PREFIX),
    Number(process.env.APP_PORT),
    []
);

app.listen();