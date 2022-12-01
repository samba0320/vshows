import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SelectCitiesComponent } from '../select-cities/select-cities.component';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  showFiller = false;
  showBackdrop: boolean =  false


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }
  showBackdropModel(){
    this.showBackdrop = !this.showBackdrop
  }

  openSearchDialog() {
    this.dialog.open(SearchBarComponent, {
      data: {
        
      },
    }); 
  }
  // opencityDialog(){
  //   this.dialog.open(SelectCitiesComponent,{
  //     data:{

  //     },
  //   });
  // }
}
