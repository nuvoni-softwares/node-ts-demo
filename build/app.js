"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_router_1 = require("./routes/index.router");
class App {
    constructor() {
        this.express = express_1.default();
        this.config();
        this.routes();
        this.errorHandling();
        this._404();
    }
    config() {
        this.express.set('port', process.env.PORT || 3000);
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.use(cors_1.default());
        this.express.use(express_1.default.static('public'));
    }
    routes() {
        this.express.use("/", new index_router_1.IndexRouter().router);
    }
    errorHandling() {
        this.express.use((err, req, res, next) => {
            if (err) {
                if (process.env.NODE_ENV != 'production')
                    res.status(500).send({ error: true, message: err.message, stacktrace: err.stack });
                else
                    res.status(500).send({ error: true, message: 'Erro ao processar solicitação', stacktrace: err.stack });
            }
            else
                next();
        });
    }
    _404() {
        this.express.use((req, res) => {
            res.sendStatus(404);
        });
    }
}
const app = new App();
exports.default = app.express;
//# sourceMappingURL=app.js.map