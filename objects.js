var playlist = {"Cool Alyx": "Funky Town"}

function updatePlaylist(obj, artistName, songTitle) {
    return obj[artistName] = songTitle;
}

function removeFromPlaylist(obj, artistName) {
    return obj.delete(artistName)
}
