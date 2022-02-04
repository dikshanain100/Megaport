import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure : true
})
export class SearchFilterPipe implements PipeTransform {
  transform(array, searchValue : string): any {
    if(!array || !searchValue){
      return array;
    }
    return array.filter(item =>
      item.id.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      item.type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      item.topping.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    
  }

}
