import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DatabaseModule, GraphQLModule.forRoot({
    playground: true,
    debug: true,
    autoSchemaFile: true,
  }),
    ComponentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
