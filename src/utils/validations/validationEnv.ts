import { cleanEnv, port, str } from "envalid";

function validationEnv(): void {
    cleanEnv(process.env, {
        APP_PORT: port({
            default: 3000
        }),
        APP_API_PREFIX: str()
    });
}

export default validationEnv;
