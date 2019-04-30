import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  pages: any[] = [];
  constructor(
  protected userService: UserService
  ){}
  
  //inicializa
  ngOnInit() {
    this.userService.getPages()
    .subscribe(
      (data) => { // Success
        this.pages = data['results'];
		console.log(data);
		
		
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
