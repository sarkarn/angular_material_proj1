import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message,action, { duration: 5000});
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snack Bar was dismmised');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('Snack Bar Action Was Triggerred');
    });

  }
}
