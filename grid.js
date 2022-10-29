class Grid {
    constructor(width, height) {
        this.width = width > 50 ? 50 : width;
        this.height = height > 50 ? 50 : height;
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