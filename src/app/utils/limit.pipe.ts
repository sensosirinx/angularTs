import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'limit',
  pure: false
})

export class Limit implements PipeTransform {

  transform(value: any, start?: any, end?: any): any {
    if (start == null && end == null) {
      return value
    } else {
      return value.slice(start, end)
    }
  }

}
