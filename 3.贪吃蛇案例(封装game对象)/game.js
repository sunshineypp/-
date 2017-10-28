/**
 * Created by Dell on 2017/8/27.
 */
(function (window) {
    function Game(map) {
        this.map = map;
        
        this.food = new Food({
            backgroundColor : "skyblue",
            map : map
        });
        
        this.snake = new Snake({
            map : map
        });

        this.binkKeyEvent();
    }
    
    Game.prototype = {
        startGame : function () {
            var that = this;
            var timer = setInterval(function () {
                that.snake.move(that.food);
                if(that.snake.body[0].x <= 0 || that.snake.body[0].x > that.map.offsetWidth / that.snake.width || that.snake.body[0].y <= 0 || that.snake.body[0].y > that.map.offsetHeight / that.snake.height)
                {
                    clearInterval(timer);
                    alert("Game Over!");
                }

                for(var i = 3; i < that.snake.body.length; i++)
                {
                    if(that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y)
                    {
                        clearInterval(timer);
                        alert("Game Over!");
                    }
                }
            },200);
        },
        binkKeyEvent : function () {
            var that = this;
            document.onkeyup = function (e) {
                switch(e.keyCode)
                {
                    case 37:
                        //左
                        if(that.snake.direction != "right")
                        {
                            that.snake.direction = "left";
                        }
                        break;
                    case 38:
                        //上
                        if(that.snake.direction != "bottom")
                        {
                            that.snake.direction = "top";
                        }
                        break;
                    case 39:
                        //右
                        if(that.snake.direction != "left")
                        {
                            that.snake.direction = "right";
                        }
                        break;
                    case 40:
                        //下
                        if(that.snake.direction != "top")
                        {
                            that.snake.direction = "bottom";
                        }
                        break;
                }
            };
        }
    };
    
    window.Game = Game;
})(window);