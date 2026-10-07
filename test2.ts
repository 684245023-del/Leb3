abstract class Shipping{
    public base:number;
    constructor(b:number){
        this.base = b;
    }
    abstract calculator(icome:number):void;
}
class Standard extends Shipping{
    private late:number= 3;
    private price:number = 0;
    calculator(income:number):void {
        this.price = this.base + income * this.late;
        console.log(`ค่าส่งStandard ${this.price}บาท`);
    }
}
class Express extends Shipping{
    private late:number= 3;
    private speed:number =2;
    private price:number = 0;
    calculator(income:number):void {
        this.price = this.base + income * this.late *this.speed ;
        console.log(`ค่าส่งExpress ${this.price} บาท`);
    }
}
const box1 = new Standard(5);
box1.calculator(15);
const box2 = new Express(5)
box2.calculator(15);