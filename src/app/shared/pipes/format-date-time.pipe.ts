import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateTime'
})
export class FormatDateTimePipe implements PipeTransform {

  transform(value: Date | string): string {
    const date = new Date(value);

    const year = date.getFullYear();
    const month = this.pad(date.getMonth() + 1);
    const day = this.pad(date.getDate());

    let hours = date.getHours();
    const minutes = this.pad(date.getMinutes());
    const seconds = this.pad(date.getSeconds());

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // el 0 se convierte en 12

    return `${year}-${month}-${day} ${this.pad(hours)}:${minutes}:${seconds} ${ampm}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }

}
