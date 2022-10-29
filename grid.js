const WidthGrid = 50;
const HeightGrid = 50;

class Grid {
    constructor(width, height) {
        this.width = width > WidthGrid ? WidthGrid : width;
        this.height = height > HeightGrid ? HeightGrid : height;
        this.scents = [];
    }

    leaveScent(position) {
        this.scents.push(position.y * this.width + position.x);
    };

    isScented(position) {
        return this.scents.indexOf(position.y * this.width + position.x) >= 0;
    }

    isPresent(position) {
        return !(
            position.x < 0 ||
            position.y < 0 ||
            position.x > this.width ||
            position.y > this.height
        );
    }

}