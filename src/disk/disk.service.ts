import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerservice: PowerService) {}

  getData() {
    console.log('Drawing 20 watts of power from PowerService');
    this.powerservice.supplyPower(20);
    return 'data!';
  }
}
