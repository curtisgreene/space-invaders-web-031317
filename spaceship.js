class Spaceship {
  constructor(name, crew_array, phasers, shields) {
    var me = this
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.cloaked = false
    this.crew_array = crew_array
    if (crew_array.length !== 0) {
      crew_array.forEach(function(crewMember){
        return crewMember.currentShip = me
      })
      this.docked = false
    } else {this.docked = true}
  }
}
