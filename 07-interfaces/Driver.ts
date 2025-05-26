import { Coach } from "./Coach";
import { SoccerCoach } from "./SoccerCoach";
import { hockeyCoach } from "./hockeyCoach";

let mySoccerCoach = new SoccerCoach();
let myHockeyCoach = new hockeyCoach();

let theCoaches: Coach[] = [];

theCoaches.push(mySoccerCoach);
theCoaches.push(myHockeyCoach);

for (let tempCoah of theCoaches) {
  console.log(tempCoah.getDailyWorkout());
}
