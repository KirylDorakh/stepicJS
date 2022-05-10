function Test(){

    console.log("Constructor: x="+this.x+", y="+this.y+", sum="+this.sum());
}

Test.prototype.x = 3;
Test.prototype.y = 5;
Test.prototype.sum = function(){
    return this.x + this.y
}

Test()