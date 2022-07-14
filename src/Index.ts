import express, { Application,Request,Response } from "express";
import dataSource from "../src/database/Config";
import router from "./routes/Route";
import errorHandler from "./middleware/errorHandler";
class Index  {
  public app: Application;
  public port: number;
  constructor() {
    this.app = express();
    this.port = 3000;
    this.initializeDatabase();
    this.initializeMiddelware();
    this.app.listen(this.port, () => {
      console.log("listening");
    });
  }
  private initializeDatabase(): void {
    dataSource.initialize();
  }
  private initializeMiddelware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use('/api',router)
    this.app.use(errorHandler)
   }
 
}
const start = new Index();
