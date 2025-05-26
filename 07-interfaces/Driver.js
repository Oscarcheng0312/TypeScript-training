"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoccerCoach_1 = require("./SoccerCoach");
var hockeyCoach_1 = require("./hockeyCoach");
var mySoccerCoach = new SoccerCoach_1.SoccerCoach();
var myHockeyCoach = new hockeyCoach_1.hockeyCoach();
var theCoaches = [];
theCoaches.push(mySoccerCoach);
theCoaches.push(myHockeyCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoah = theCoaches_1[_i];
    console.log(tempCoah.getDailyWorkout());
}
