import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // exporta o PrismaService para que possa ser injetado em outros módulos
})
export class DatabaseModule {}
