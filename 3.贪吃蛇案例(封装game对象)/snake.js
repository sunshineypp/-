/**
 * Created by Dell on 2017/8/27.
 */
(function (window) {
    function Snake(options) {
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.headColor = options.headColor || "red";
        this.bodyColor = options.bodyColor || "yellow";
        this.direction = "right";
        this.map = options.map;
        this.elements = [];

        //body数组存的是每一小节蛇的相关信息
        this.body = [
            {x : 3, y : 2 , color : this.headColor},
            {x : 2, y : 2 , color : this.bodyColor},
            {x : 1, y : 2 , color : this.bodyColor}
        ];

        this.render();
    }
    Snake.prototype = {
        render : function () {
            for(var i = 0; i < this.body.length; i++)
            {
                var smallSnake = this.body[i];

                var div = document.createElement("div");
                this.elements.push(div);

                div.style.width = this.width + "px";
                div.style.height = this.height + "px";
                div.style.backgroundColor = smallSnake.color;

                div.style.position = "absolute";
                div.style.left = smallSnake.x * this.width + "px";
                div.style.top = smallSnake.y * this.height + "px";

                this.map.appendChild(div);
            }
        },
        move : function (food) {
            for(var i = this.body.length - 1; i > 0; i--)
            {
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;
            }
            switch(this.direction)
            {
                case "right":
                    this.body[0].x ++;
                    break;
                case "left":
                    this.body[0].x --;
                    break;
                case "top":
                    this.body[0].y --;
                    break;
                case "bottom":
                    this.body[0].y ++;
                    break;
            }
            
            if(this.body[0].x == food.x && this.body[0].y == food.y)
            {
                this.body.push({
                    x : this.body[this.body.length - 1].x,
                    y : this.body[this.body.length - 1].y,
                    color : this.bodyColor
                });
                
                food.render();
            }
            
            for(var j = 0; j < this.elements.length; j++)
            {
                this.map.removeChild(this.elements[j]);
            }
            this.elements = [];
            
            this.render();
        }
    };
    window.Snake = Snake;
})(window);