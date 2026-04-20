// This is a FUNCTION inside a MODULE
export function getRandomColor() {
    const colors = ["#FF0000", "#00FF00", "#0000FF", 
        "#FFFF00", "#FF00FF", "#00FFFF"];
    // Logic: Pick a random index from the array
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

