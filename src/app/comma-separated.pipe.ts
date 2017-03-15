import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'commaSeparated'})
export class CommaSeparatedPipe implements PipeTransform {
  transform(stringList: string[]): string {
    return _.join(stringList, ', ');
  }
}
