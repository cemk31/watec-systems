import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customer'
})
export class CustomerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
