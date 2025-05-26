import { Coach } from "./Coach";
export class SoccerCoach implements Coach {
  getDailyWorkout(): string {
    return "Shoot for 100 times";
  }
}
