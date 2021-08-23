import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  inactiveUsersClicks$ = new BehaviorSubject<number>(0)
  activeUsersClicks$ = new BehaviorSubject<number>(0)
  constructor() {}

  incrementActiveUsersClicks(): void {
    let current = this.inactiveUsersClicks$.getValue()
    this.inactiveUsersClicks$.next(++current)
  }
  incrementInactiveUsersClicks(): void {
    let current = this.activeUsersClicks$.getValue()
    this.activeUsersClicks$.next(++current)
  }

  getInactiveClicks(): BehaviorSubject<number> {
    return this.inactiveUsersClicks$
  }

  getActiveClicks(): BehaviorSubject<number> {
    return this.activeUsersClicks$
  }
}
