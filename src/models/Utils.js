function degreesToRadians(degrees) {
    return degrees * (Math.PI/180);
}

function getColorForNeighborhoodSize(size) {
    if (size < 10)
        return "green";
    if (size < 30)
        return "yellow";
    if (size < 50)
        return "blue";
    return "red";
}