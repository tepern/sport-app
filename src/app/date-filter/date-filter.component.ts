import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {
    @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();
    form: FormGroup;

    constructor() { 
        this.form = new FormGroup({
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
        })

    }

    ngOnInit() {
       
    }
    
    submit() {
        const formData = {...this.form.value};
        this.onFilter.emit(formData);
        this.form.reset();
    }

    formReset(): void {
        if(<HTMLFormElement>document.getElementById("filter")) {
            (<HTMLFormElement>document.getElementById("filter")).reset();
        } 
    }

}
