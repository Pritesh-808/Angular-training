// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'sqrt'
// })
// export class SqrtPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';



@Pipe({

name: 'sqrt'

})

export class SqrtPipe implements PipeTransform {



transform(value: number): number {

return Math.sqrt(value);

}



}