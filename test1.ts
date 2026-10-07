interface PaymentMethod{
    payment(pay:number):void;
}
class PayCredit implements PaymentMethod{
    constructor(private credit:string){}
    payment(pay:number):void{
        console.log(`ชำระเงิน ${pay}บาท โดยใช้บัตรเครดิตหมายเลข ${this.credit}`);
    }
}
const credit1 = new PayCredit("123456");
credit1.payment(10);