import { Module } from '@nestjs/common';
import { PickupPointsService } from './pickup_points.service';
import { PickupPointsController } from './pickup_points.controller';

@Module({
  providers: [PickupPointsService],
  controllers: [PickupPointsController]
})
export class PickupPointsModule {}
