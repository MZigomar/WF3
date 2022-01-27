class Board {
    constructor() {
        this.grid = [
            [new Case(), new Case(), new Case(),],
            [new Case(), new Case(), new Case(),],
            [new Case(), new Case(), new Case(),]
        ];
    }

    jouer(p, x, y) {
        this.grid[x][y].setContent(p)
    }
    getGrid() {
        return this.grid;
    }
    getCase(x, y) {
        return this.grid[x][y];
    }
    isFull() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j].isEmpty())
                    return false;
            }
        }
        return true;
    }

    checkRow(x) {
        return !this.grid[x][0].isEmpty() && this.grid[x][0].getContent() == this.grid[x][1].getContent() && this.grid[x][0].getContent() == this.grid[x][2].getContent()
    }
    checkCol(y) {
        return !this.grid[0][y].isEmpty() && this.grid[0][y].getContent() == this.grid[1][y].getContent() && this.grid[0][y].getContent() == this.grid[2][y].getContent()
    }
    checkdiag() {
        return (!this.grid[1][1].isEmpty() && this.grid[1][1].getContent() == this.grid[0][0].getContent() && this.grid[1][1].getContent() == this.grid[2][2].getContent()) ||
            (!this.grid[1][1].isEmpty() && this.grid[1][1].getContent() == this.grid[0][2].getContent() && this.grid[1][1].getContent() == this.grid[2][0].getContent())
    }

    isWon() {
        let x = 1, y = 1;
        if (
            this.checkRow(x) || this.checkRow(x + 1) || this.checkRow(x - 1)
            || this.checkCol(y) || this.checkCol(y + 1) || this.checkCol(y - 1)
            || this.checkdiag()
        )
            return true;
        return false;
    }

}
