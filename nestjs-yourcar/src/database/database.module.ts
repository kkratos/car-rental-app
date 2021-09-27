import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Connection } from "typeorm"

@Module({
    imports: [TypeOrmModule.forRoot()],
    exports: []
})

export class DatabaseModule {
    constructor(connection: Connection) {
        if (connection.isConnected) {
            console.log("db is connected successfully");
        }
    }
}