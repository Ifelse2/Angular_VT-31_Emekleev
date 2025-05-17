import { Pipe, type PipeTransform } from "@angular/core";
@Pipe({
 name: "Def",
})
export class Defpipe implements PipeTransform {
 transform(value: string): string {
  return value
   .split("")
   .map((char) => char + "-")
   .join("");
 }
}