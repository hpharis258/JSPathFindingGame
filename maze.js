//debugger;
console.log('the maze has started');
let canvas = document.createElement('canvas');
canvas.setAttribute('width', 1000);
canvas.setAttribute('height', 1000);
canvas.setAttribute('id', 'canvasScreen');
gameScreen.appendChild(canvas);
// Create Maze Canvas !

let maze = document.querySelector('canvas');
let context = maze.getContext('2d');
let current;

class Maze{
    constructor(size, rows, columns)
    {
        this.size = size;
        this.rows = rows;
        this.columns = columns;
        this.grid = [];
        this.stack = [];
    }
    // Setup Grid on canvas
    setup()
    {
        for(let rowCounter = 0; rowCounter < this.rows; rowCounter++)
        {
            let rowArray = [];
            for(let columnCounter = 0; columnCounter < this.columns; columnCounter++)
            {

                let cellInstance = new Cell(rowCounter, columnCounter, this.grid, this.size);
                rowArray.push(cellInstance);
            }
            this.grid.push(rowArray);
        }
        current = this.grid[0][0];
    }
    draw(){
        maze.width = this.size;
        maze.height = this.size;
        maze.style.background = 'black';
        current.visited = true;
        // Call Show for Each Cell
        for(let rowCounter = 0; rowCounter < this.rows; rowCounter++ )
        {
            for(let columnCounter = 0; columnCounter < this.columns; columnCounter++)
            {
                let grid = this.grid;
                this.grid[rowCounter][columnCounter].show(this.size, this.rows, this.columns);
            }
        }
        // Check Next Node
        let next = current.checkNeighbours();
        if(next)
        {
            next.visited = true;
            // Keep track of visited Cells/Nodes
            this.stack.push(current);
            current.highlight(this.columns, 'green');
            //
            current.removeWall(current, next);

            current = next;
        }
        // Backtracker
        else if(this.stack.length > 0){
            let cell = this.stack.pop();
            current = cell;
            current.highlight(this.columns, 'purple');
        }
        // Maze is Generated Stack is Empty 
        if(this.stack.length == 0)
        {
            console.log('Maze is Generated!!!');
            // Set First Node Color to Black
            context.fillStyle = 'black';
            context.fillRect(2, 2, 97 ,97);
            //
            let playerScript = document.createElement('script');
            playerScript.setAttribute('src', './player.js');
            gameScreen.appendChild(playerScript);

            return;
        }
        window.requestAnimationFrame(() => {
            this.draw();
        })
    }
}

class Cell{
    constructor(rowNum, columnNum, parentGrid, parentSize)
    {
        this.rowNum = rowNum;
        this.columnNum = columnNum;
        this.parentGrid = parentGrid;
        this.parentSize = parentSize;
        this.visited =  false;
        this.walls = {
            topWall: true,
            rightWall: true,
            bottomWall: true,
            leftWall: true        
        };
    }
    //Check Nodes Close By 
    checkNeighbours()
    {
        let grid = this.parentGrid;
        let row = this.rowNum;
        let col = this.columnNum;
        let neighbours = [];
        //
        let top = row !== 0 ? grid[row -1][col] : undefined;
        let right = col !== grid.length - 1 ? grid[row][col + 1] : undefined;
        let bottom = row !== grid.length - 1 ? grid[row + 1][col] : undefined;
        let left = col !== 0 ? grid[row][col - 1] : undefined;

        if(top && !top.visited) neighbours.push(top);
        if(right && !right.visited) neighbours.push(right);
        if(bottom && !bottom.visited) neighbours.push(bottom);
        if(left && !left.visited) neighbours.push(left);
        //
        if(neighbours.length !== 0)
        {
            let random = Math.floor(Math.random() * neighbours.length);
            // if there is neibghour return random of available ones
            return neighbours[random];
        }else{
            return undefined;
        }
    }
    // Draw Methods
    // Top
    drawTopWall(x, y, size, columns, rows)
    {
        context.beginPath();
        // Move to top left of the node
        context.moveTo(x,y);

        context.lineTo(x +size/columns, y);
        context.stroke();
    }
    // right 
    drawRightWall(x, y, size, columns, rows)
    {
        context.beginPath();
        context.moveTo(x + size/columns,y);

        context.lineTo(x +size/columns, y + size / rows);
        context.stroke();
    }
     // bottom
     drawBottomWall(x, y, size, columns, rows)
     {
         context.beginPath();
         context.moveTo(x,y + size/rows);
 
         context.lineTo(x +size/columns, y + size / rows);
         context.stroke();
     }
     // left 
     drawLeftWall(x, y, size, columns, rows)
     {
         context.beginPath();
         context.moveTo(x,y);
 
         context.lineTo(x, y + size / rows);
         context.stroke();
     }
     // Remove Wall:
     removeWall(cell1, cell2)
     {
        // comp x
        let x = cell1.columnNum - cell2.columnNum;
        if(x == 1)
        {
            cell1.walls.leftWall = false;
            cell2.walls.rightWall = false;
        }
        else if (x == -1)
        {
            cell1.walls.rightWall = false;
            cell2.walls.leftWall = false;
        }
        // comp y
        let y =  cell1.rowNum - cell2.rowNum;
        if(y == 1)
        {
            cell1.walls.topWall = false;
            cell2.walls.bottomWall = false;
        }
        else if (y == -1)
        {
            cell1.walls.bottomWall = false;
            cell2.walls.topWall = false;
        }
     }
     // Highlight
     highlight(columns, color)
     {
        let x = this.columnNum * this.parentSize / columns + 1;
        let y = this.rowNum * this.parentSize / columns + 1;

        context.fillStyle = color;
        context.fillRect(x,y,this.parentSize/columns-3, this.parentSize/ columns - 3);
     }
     //Show
     show(size, rows, columns)
     {
        let x = (this.columnNum * size) / columns;
        let y = (this.rowNum * size) / rows;
        //
        context.strokeStyle = 'white';
        //context.fillStyle = 'green';
        context.lineWidth = 2;
        if(this.walls.topWall) this.drawTopWall(x,y,size, columns, rows);
        if(this.walls.rightWall) this.drawRightWall(x,y,size,columns, rows);
        //debugger;
        if(this.walls.bottomWall) this.drawBottomWall(x,y,size,columns,rows);
        if(this.walls.leftWall) this.drawLeftWall(x, y, size, columns, rows);
        if(this.visited)
        {
            context.fillRect(x +1, y+1, size/columns - 2, size/rows -2);
        }
     }
}

console.log('this has ran');
let newMaze = new Maze(1000, 10, 10);
newMaze.setup();
newMaze.draw();
