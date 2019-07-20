import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'reverse'
})

export class ReversePipe implements PipeTransform {

    transform(value: any, args: any) {
        console.log(value.split(''));
        console.log(value.split('').reverse());
        console.log(value.split('').reverse().join(''));
        console.log(args);
       return value.split('').reverse().join('');
    }

}