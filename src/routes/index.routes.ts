import { Router } from "express";
import { IndexController } from "../controllers/indexController";

export class IndexRouter {

    public router: Router;
    private indexCtrl: IndexController = new IndexController();


    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get("/", this.indexCtrl.index);
        this.router.get("/primes/:prime_count", this.indexCtrl.primes);
        this.router.post("/add", this.indexCtrl.add);
        this.router.post("/subtract", this.indexCtrl.subtract);
    }
}