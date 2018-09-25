import { Component, ViewChild } from '@angular/core';
import {IMyDrpOptions, MyDateRangePicker, IMyDateRangeModel} from 'mydaterangepicker';
import { NgxDateRangePickerOptions } from 'ngx-daterangepicker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	// @ViewChild('mydrp') mydrp: MyDateRangePicker;
	options: NgxDateRangePickerOptions;

	// myDateRangePickerOptions: IMyDrpOptions = {
	//     dateFormat: 'dd.mm.yyyy',
	//     showApplyBtn: false,
	//     showSelectDateText: false
	// };

	// private model: any = {beginDate: {year: 2018, month: 10, day: 9}, endDate: {year: 2018, month: 10, day: 19}};

	constructor(){
		this.options = {
            theme: 'default',
            labels: ['Start', 'End'],
            menu: [
                {alias: 'td', text: 'Today', operation: '0d'},
                {alias: 'tm', text: 'This Month', operation: '0m'},
                {alias: 'lm', text: 'Last Month', operation: '-1m'},
                {alias: 'tw', text: 'This Week', operation: '0w'},
                {alias: 'lw', text: 'Last Week', operation: '-1w'},
                {alias: 'ty', text: 'This Year', operation: '0y'},
                {alias: 'ly', text: 'Last Year', operation: '-1y'},
                {alias: 'ny', text: 'Next Year', operation: '+1y'},
                {alias: 'lyt', text: 'Last year from today', operation: '-1yt'},
            ],
            dateFormat: 'YYYY-MM-DD',
            outputFormat: 'DD-MM-YYYY',
            startOfWeek: 0,
            outputType: 'object',
            locale: 'es',
            date: {
                from: {
                    year: 2017,
                    month: 3,
                    day: 5
                },
                to: {
                    year: 2017,
                    month: 3,
                    day: 6
                }
            }
        };
	}

	// openCalendar(event: any){
	// 	console.log('openCalendar');
	// 	event.stopPropagation();
 //        this.mydrp.openBtnClicked();
	// }

	// onDateRangeChanged(event: IMyDateRangeModel) {
 //        console.log('onDateRangeChanged(): Begin date: ', event.beginDate, ' End date: ', event.endDate);
 //        console.log('onDateRangeChanged(): Formatted: ', event.formatted);
 //        console.log('onDateRangeChanged(): BeginEpoc timestamp: ', event.beginEpoc, ' - endEpoc timestamp: ', event.endEpoc);
 //        this.mydrp.openBtnClicked();
 //    }

}
