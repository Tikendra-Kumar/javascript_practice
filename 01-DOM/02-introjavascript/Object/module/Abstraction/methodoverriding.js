class bank{
    constructor(name){
        this.name= name;
    }
    //method meant to be overriding 
    getInterestRate(){
        return 0;   
    }
    calculateInterest(amount){
        const rate = this.getInterestRate();
        return (amount*rate)/100;
    }
    displayInterest (amount){
        const interest = this.calculateInterest(amount);
        console.log(`${this.name} offers ${this.getInterestRate()}% interest` );
        console.log(`Interest on $${amount}= $${interest}`);
    }
}
    class SBI extends bank{
        getInterestRate(){
            return 7.5; 
        }
}   
    class HDFC extends bank{
        getInterestRate()
            {
                return 8.5; 
        }
    }
    class AXIS extends bank{
        getInterestRate(){
            return 9.5;
        }
    }
    const amount = 10000;   
    const obj = new SBI("SBI bank ");
    const obj1 = new HDFC("HDFC bank ");
    const obj2 = new AXIS("Axis bank ");
    
    obj.displayInterest(amount);
    obj1.displayInterest(amount);
     obj2.displayInterest(amount);


