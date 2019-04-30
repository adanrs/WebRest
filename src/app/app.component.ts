import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Examen';
  users: any[] = [];
  constructor(
  protected userService: UserService
  ){}
  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
		console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
