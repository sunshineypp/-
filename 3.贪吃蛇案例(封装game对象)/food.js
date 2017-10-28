/**
 * Created by Dell on 2017/8/27.
 */
//食物对象
(function (window) {
    function Food(options) {
        this.width = options.width || 20;
        this.height = options.height ||20;
        this.backgroundColor = options.backgroundColor;
        this.map = options.map;

        this.element = document.createElement("div");
        this.init();
    }
    Food.prototype = {
        //将对象创建完成后的所有行为放在原型里，
        //避免都写在构造函数里，造成结构混乱
        init : function () {
            this.element.style.width = this.width + "px";
            this.element.style.height = this.height + "px";
            this.element.style.backgroundColor = this.backgroundColor;

            this.render();
        },
        render : function () {
            //随机坐标的生成
            this.x = getRandom(2,map.offsetWidth/this.width);
            this.y = getRandom(2,map.offsetHeight/this.height);

            this.element.style.position = "absolute";
            this.element.style.left = this.x * this.width + "px";
            this.element.style.top = this.y * this.height + "px";
            this.map.appendChild(this.element);
        }
    };
    window.Food = Food;
})(window);
