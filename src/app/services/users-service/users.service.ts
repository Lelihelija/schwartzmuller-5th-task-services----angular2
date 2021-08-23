import { Injectable } from '@angular/core'
import { CounterService } from '../counter-service/counter.service'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  inactiveUsers = ['Chris', 'Manu']
  activeUsers = ['Max', 'Anna']
  constructor(private counterService: CounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1)
    this.counterService.incrementActiveUsersClicks()
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id])
    this.inactiveUsers.splice(id, 1)
    this.counterService.incrementInactiveUsersClicks()
  }

  getActiveUsers(): string[] {
    return this.activeUsers
  }

  getInactiveUsers(): string[] {
    return this.inactiveUsers
  }
}
