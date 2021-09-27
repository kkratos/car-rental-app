import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CarsResolver } from "./cars.resolver";
import { Car } from "./entities/cars";

@Module({
    imports: [TypeOrmModule.forFeature([Car])],
    providers: [CarsService, CarsResolver],
    exports: []
})

export class CarsModule { }