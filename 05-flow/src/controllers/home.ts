import { injectable } from "tsyringe";

import { ExpressApi } from "../expressApi";

@injectable()
export class HomeController {
    private api: ExpressApi;

    constructor(api: ExpressApi) {
        this.api = api;
    }

    public init() {
        this.api.instance()
            .get("/", (req, res) => {
                res.send("Hello");
            });
    }
}