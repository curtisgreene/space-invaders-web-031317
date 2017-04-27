class Spaceship {
  constructor(name, crew_array, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.cloaked = false
    this.crew_array = crew_array
    if (crew_array.length !== 0) {
      crew_array.forEach(function(crewMember){
        return crewMember.currentShip = this
      }, this)
      this.docked = false
    } else {this.docked = true}
  }
}
