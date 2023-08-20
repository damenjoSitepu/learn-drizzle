import { cleanEnv, port, str } from "envalid";

function validationEnv(): void {
    cleanEnv(process.env, {
        // Port Configuration
        APP_PORT: port({
            default: 3000
        }),
        // API Configuration
        APP_API_PREFIX: str(),
        // My SQL Configuration 
        APP_DATABASE_HOST: str({
            default: "127.0.0.1"
        }),
        APP_DATABASE_USER: str({
            default: "root"
        }),
        APP_DATABASE_PASSWORD: str({
            default: ""
        }),
        APP_DATABASE_NAME: str({
            default: "account"
        })
    });
}

export default validationEnv;
