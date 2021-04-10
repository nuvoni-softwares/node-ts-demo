import express, { Application } from 'express';
import cors from 'cors'
import { NextFunction, Request, Response } from 'express'
import { IndexRouter } from './routes/index.routes'

class App {
    public express: Application = express();

    constructor() {
        this.config()

        this.routes()

        this.errorHandling()

        this._404()
    }

    private config() {
        this.express.set('port', process.env.PORT || 3000)
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: false }))
        this.express.use(cors())
        this.express.use(express.static('public'));
    }

    private routes(): void {
        this.express.use("/", new IndexRouter().router);
    }

    private errorHandling(): void {
        this.express.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            if (err) {
                if (process.env.NODE_ENV != 'production')
                    res.status(500).send({ error: true, message: err.message, stacktrace: err.stack })
                else
                    res.status(500).send({ error: true, message: 'Erro ao processar solicitação', stacktrace: err.stack })
            } else
                next()
        });
    }

    private _404(): void {
        this.express.use((req: Request, res: Response) => {
            res.sendStatus(404)
        })
    }
}

const app = new App()
export default app.express