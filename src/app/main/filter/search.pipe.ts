import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchTitle?: string): any {
    //Empty Search String
    if (!searchTitle) return value;

    var filterData = value.filter((val) => {
      return val.title
        .toLocaleLowerCase()
        .includes(searchTitle.toLocaleLowerCase());
    });

    return filterData;
  }
}
