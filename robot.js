const dirrectionArr = ["N", "E", "S", "W"]

class Robot {
    constructor(grid, x, y, orientation) {
        this.grid = grid;
        this.position = {
            x: parseInt(x),
            y: parseInt(y),
        };
        this.orientation = orientation;
        this.lost = false;
    }

    // rotate left
    turnLeft() {
        let currentDir = dirrectionArr.indexOf(this.orientation);
        if (currentDir === 0) {
            currentDir = 4;
        }
        this.orientation = dirrectionArr[currentDir - 1];
    };
    // rotate right
    turnRight() {
        let currentDir = dirrectionArr.indexOf(this.orientation);
        if (currentDir === 3) {
            currentDir = -1;
        }
        this.orientation = dirrectionArr[currentDir + 1];
    };

    // move robot one cell forward in current direction
    moveForward() {
        let oldPosition = { x: this.position.x, y: this.position.y };
        switch (this.orientation) {
            case "N":
                this.position.y++;
                break;
            case "E":
                this.position.x++;
                break;
            case "S":
                this.position.y--;
                break;
            case "W":
                this.position.x--;
                break;
            default:
                break;
        }

        // check if new position is within grid
        if (this.grid.isPresent(this.position) === false) {
            // set position to before moving off grid
            this.position = oldPosition;

            // if this.position not scented mark robot as lost and scent position
            if (!this.grid.isScented(this.position)) {
                this.grid.leaveScent(this.position);
                this.lost = true;
                return false;
            }
        }
        return true;
    };

    //returns 'false' if the robot is lost
    move(command) {
        switch (command) {
            case "R":
                this.turnRight();
                break;
            case "L":
                this.turnLeft();
                break;
            case "F":
                return this.moveForward();
        }

        return true;
    };

    //returns 'false' if the robot is lost
    processCommands(commands) {
        for (let i = 0; i < commands.length; i++) {
            if (!this.move(commands.charAt(i))) return false;
        }

        return true;
    };

    toString() {
        return this.position.x + " " + this.position.y + " " + this.orientation;
    };

}
