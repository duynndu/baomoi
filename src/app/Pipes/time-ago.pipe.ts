import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    return formatDistanceToNow(value, { addSuffix: true });
  }
}
// định dạng Khoảng cách đến bây giờ
