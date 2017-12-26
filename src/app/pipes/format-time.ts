import { Pipe } from '@angular/core';
 
@Pipe({
  name: 'formatTime'
})
export class FormatTime {
    times = {
        hour: 3600,
        min: 60,
        sec: 1
    }

    transform(sec) {
        let time_string: string = '';
        let value;
        let parent = false;
        for (var key in this.times) {
            value = Math.floor(sec / this.times[key]);
            if ((parent == false && value > 0) || (parent == true && value >= 0)) {
                if (value < 10) { value = '0'+value; }
                time_string += '<span class="'+ key.toString() +'--countdown-timer"><strong>';
                time_string += value.toString() + '</strong> ';
                time_string += key.toString() + '</span>';
                sec = sec - this.times[key] * Math.floor(sec / this.times[key]);

                parent = true;  
            }
        }
        return time_string;
    }
}