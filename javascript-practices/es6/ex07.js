/**
 * class
 */

class React{
    constructor(w,h){
        this.w = w;
        this.h = h;
    }

    draw(){
        console.log(`React(w=${this.w}, h=${this.h})를 그렸습니다.`);
    }
}

// test1
const react1 = new React(10,20);
const react2 = new React(100,200);
react1.draw();
react2.draw();

/**
 * 생성자 함수(프로토타입 기반)
 */

const Circle  = function(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
}
Circle.prototype.draw = function(){
    console.log(`Circle(x=${this.x}, y=${this.y}, r=${this.r})를 그렸습니다.`)
}

const c1 = new Circle(1,2,5);
const c2 = new Circle(10,20,50);

c1.draw();
c2.draw();

/**
 * extends
 */

class Shape{
    constructor(bgColor, lnColor){
        this.bgColor=bgColor;
        this.lnColor=lnColor;
    }
    draw(){
        console.log("그릴 수 없습니다.")
    }
    area(){
        console.log("구할 수 없습니다.")
    }
}

class Triangle extends Shape{
    constructor(w,h){
        super('red','black');
        this.w=w;
        this.h=h;
    }

    // @Override
    draw(){
        console.log(`Triangle=(w=${this.w}, h=${this.h}, bgColor=${this.bgColor}, lnColor=${this.lnColor})`);
    }
}

const t1 = new Triangle(10,20);
t1.draw();
t1.area();