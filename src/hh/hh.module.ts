import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TopPageModule } from 'src/top-page/top-page.module';
import { HhService } from './hh.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [HhService],
  imports: [ConfigModule, HttpModule],
  exports: [HhService]
})
export class HhModule {}
