import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

// services
import { CounterService } from './services/counter-service/counter.service'
import { UsersService } from './services/users-service/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  inactiveUsersSubscription: Subscription
  activeUsersSubscription: Subscription
  inactiveClicks = 0
  activeClicks = 0

  constructor(
    private usersService: UsersService,
    private counterService: CounterService,
  ) {}

  ngOnInit(): void {
    this.inactiveUsersSubscription = this.counterService
      .getActiveClicks()
      .subscribe(
        (data: number) => (this.activeClicks = data),
        (err: any) =>
          console.log('err from subscriptions in AppComponent:', err),
      )

    this.activeUsersSubscription = this.counterService
      .getInactiveClicks()
      .subscribe(
        (data: number) => (this.inactiveClicks = data),
        (err: any) =>
          console.log('err from subscriptions in AppComponent:', err),
      )
  }

  ngOnDestroy(): void {
    this.inactiveUsersSubscription.unsubscribe()
    this.activeUsersSubscription.unsubscribe()
  }
}
