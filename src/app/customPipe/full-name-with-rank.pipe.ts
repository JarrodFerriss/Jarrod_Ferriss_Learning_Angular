import { Pipe, PipeTransform } from '@angular/core';
import { SpaceMarineModel } from "../../models/space-marine.model";

@Pipe({
  standalone: true,
  name: 'fullNameWithRank'
})
export class FullNameWithRankPipe implements PipeTransform {
  transform(spaceMarine: SpaceMarineModel): string {
    return `${spaceMarine.rank} ${spaceMarine.name}`;
  }
}

