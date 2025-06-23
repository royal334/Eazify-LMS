import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global() // Makes the PrismaService available globally across the application.
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})

export class PrismaModule {}