import { Pipe } from '@angular/core';
 
@Pipe({
  name: 'formatTime'
})
export class FormatTime {
    times = {
        h: 3600,
        min: 60,
        sec: 1
    }

    transform(seconds){
        let time_string: string = '';
        let plural: string = '';
        for(var key in this.times){
            if(Math.floor(seconds / this.times[key]) > 0){
                if(Math.floor(seconds / this.times[key]) >1 ){
                    plural = 's';
                }
                else{
                    plural = '';
                }

                time_string += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + plural + ' ';
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);

            }
        }
        return time_string;
    }
}