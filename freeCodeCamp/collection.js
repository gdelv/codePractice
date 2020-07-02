console.clear()
var collection = {
    2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
        ]
    },
    2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
        "1999",
        "Little Red Corvette"
        ]
    },
    1245: {
    artist: "Robert Palmer",
    tracks: [ ]
    },
    5439: {
    album: "ABBA Gold"
    }
    };

// Only change code below this line
function updateRecords(id, prop, value) {
    let recordSelected = collection[id]
    if(prop === "artist") {
      recordSelected.artist = value
    }
    if(prop === "tracks") {
      recordSelected.tracks = []
      recordSelected.tracks.push(value)
    }
    if(prop === "album") {
      recordSelected.album = value
    }
    return collection;
}

console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
