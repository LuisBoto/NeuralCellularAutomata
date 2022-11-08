function getColorForCellState(state) {
    let alpha = (state*255).toString(16);
    if (alpha.length <= 1) 
    alpha = '0' + alpha;
    return '#000000' + alpha;
}