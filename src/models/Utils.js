function degreesToRadians(degrees) {
    return degrees * (Math.PI/180);
}

function getColorForNeighborhoodSize(size) {
    switch(size) {
        case 0:
            return "green";
        case 1:
        case 2:
        case 3:
            return "yellow";
        case 4:
        case 5:
        case 6:
            return "pink";
        default:
            return ["green", "yellow", "pink", "blue", "red", "black"][size%6];
    }
}