import { Component, OnInit } from '@angular/core'
import { UsersService } from '../services/users-service/users.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[] = []
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.getActiveUsers()
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id)
  }
}
