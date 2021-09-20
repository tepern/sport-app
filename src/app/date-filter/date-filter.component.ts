import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

    form: FormGroup;

    constructor() { 
        this.form = new FormGroup({
            startDate: new FormControl('', Validators.required),
            endDate: new FormControl('', Validators.required),
        })

    }

    ngOnInit() {
        /*this.form = new FormGroup({
            startDate: new FormControl('',Validators.required),
            endDate: new FormControl('',Validators.required),
        })*/
    }
    
    submit() {
        const formData = {...this.form.value};
        //this.onAdd.emit(formData);
        this.form.reset();
    }

}
