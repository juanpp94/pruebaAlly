import { Component } from '@angular/core';
import { User } from './core/models/user.interface';
import { TaskService } from './core/services/task.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaAlly';
  tasks: any[] = [
  { name: 'Realizar documentación en Swagger', completed: true },
  { name: 'Tomar curso React', completed: false },
  { name: 'Estudiar SpringBoot', completed: false }
];
  users: any[] = []

constructor(private taskService: TaskService, private userService: UserService) {

}

  ngOnInit() {
    this.initDB();
  }


  initDB() {
    this.addTasks();
    this.addUsers();
  }

  addUsers() {
    let users = this.getUsers();
    if(users) {
      this.userService.addUsers(users);
    } else {
      this.userService.addUsers([]);
    }

  }

  getUsers() {
    return this.userService.getUsers();
  }

  addTasks() {
    this.taskService.addTasks(this.tasks);
  }
}
