import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit{

  options: string[] = ['Angular', 'Vue', 'React'];

   objectOptions = [
     {name: 'Angular'},
     {name: 'Angular Material'},
     {name: 'React'},
     {name: 'Vue'}
   ];

   myControl = new FormControl();
   filteredOptions: Observable<string[]>;

   displayFn(subject){
     subject ? subject.name : undefined;
   }

   ngOnInit() {
     this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
     map(value => this._filter(value)));
   }

   private _filter(value: string): string[] {
     const filterValue = value.toLowerCase();
     return this.options.filter(option => option.toLowerCase().includes(filterValue));
   }
}
