import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTransformPipe',
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(n: number) {
    return n / 100;
  }
}
