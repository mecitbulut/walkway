class Location {
    constructor(name) {
        this.name = name;
        this.connectedLocations = {};
    }

}

class World {
    constructor(location, startLocation) {
        this.locations = location;

        console.log("You are at", startLocation)
        this.locations = this.locations;
        this.currLocation = startLocation;
    }

    connectedLocations(loc, connections) {
        connections.forEach((conn) => {
            //  this.locations[loc].connectedLocations.push(this.locations[conn]);
            //  this.locations[conn].connectedLocations.push(this.locations[loc]);

            this.locations[loc].connectLocations[conn] = this.connectLocations[conn];
            this.locations[loc].connectLocations[loc] = this.connectLocations[loc];
         });
    }

    move(newLocation) {
        // this.currLocation.connectedLocations.forEach((loc) => {
            // if (loc.name === newLocation) {
                // console.log("You move to", newLocation)
                // this.currLocation = this.locations[newLocation];
                // return;
            // }
        // });


        if (newLocation in this.currentLocation.connectLocations) {
            console.log("You move to", newLocation);
            this.currentLocation = this.locations[newLocation];
        } else {
            console.log("You can't go from", this.currentLocation.name, "to", newLocation);
        }
    }
}

let world = new World ({
    home: new Location("home"),
    store: new Location("store"),
    friendsHouse: new Location("friendHouse"),
    sidewalk: new Location("sidewalk")
}, "home",


world.connectedLocations("sidewalk", ["home", "store", "friendHouse"]);
world.connectLocations("home", ["friendHouse"]);

console.log(world.locations.home.connectLocations)
world.move("sidewalk");
world.move("store");
world.move("home");
world.move("friendHouse");