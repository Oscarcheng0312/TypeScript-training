import { Coach } from "./Coach";

export class hockeyCoach implements Coach {
  getDailyWorkout(): string {
    return "Practice skating for 1 hour";
  }
}
