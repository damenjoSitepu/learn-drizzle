import express, { Application, json, urlencoded } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import helmet from "helmet";
import cors from "cors";

class App {
    /**
     * Define Express Application
     */
    private _express: Application; 

    /**
     * Define Port Number For The Express Application
     */
    private _port: number;

    /**
     * Define Api Prefix For The Routes
     */
    private _apiPrefix: string;

    /**
     * Initiialize Data
     */
    public constructor(apiPrefix: string, port: number, controllers: Controller[]) {
        this._express = express();
        this._port = port;
        this._apiPrefix = apiPrefix;
        this._initializeMiddlewares();
        this._initializeControllers(controllers);
    }

    /**
     * Initialize The Controller
     * @param controllers 
     */
    private _initializeControllers(controllers: Controller[]): void {
        if (controllers?.length > 0) {
            controllers.forEach((controller: Controller) => {
                this._express.use(this._apiPrefix, controller.router);
            });
        }
    }

    /**
     * Initialize The Middleware Express Application
     */
    private _initializeMiddlewares(): void {
        this._express.use(helmet());
        this._express.use(cors());
        this._express.use(json());
        this._express.use(urlencoded({
            limit: 10000,
            extended: false
        }));
    }

    /**
     * Listen The App
     */
    public listen(): void {
        this._express.listen(this._port, () => {
            console.log(`Drizzle App Run At Port: ${this._port}`); 
        });
    }
}

export default App;