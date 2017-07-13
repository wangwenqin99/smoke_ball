function ColorBall(option){
	this._init(option);
}
ColorBall.prototype = {
	constructor:ColorBall,
	_init:function(option){
		option = option || {};
		this.circleX = option.circleX || 0;
		this.circleY = option.circleY || 0;
		this.radius = Math.random()*50 + 10;
		this.circleColor = option.circleColor||"black";
		this.moveX = Math.random()*20 - 10;
		this.moveY = Math.random()*20 - 10;
		this.reduceRadius = Math.random()*5 + 2;
	},
	render:function(ctx){
		ctx.beginPath();
		ctx.fillStyle = this.circleColor;
		ctx.arc(this.circleX, this.circleY, 
			this.radius, 
			0, 2*Math.PI, this.anticlockwise);
		ctx.fill();
	},
	update:function(){
		this.circleX += this.moveX;
		this.circleY += this.moveY;
		this.radius -= this.reduceRadius;
		// 当小球的半径小于等于0时，将小球从数组中进行移除操作
		if(this.radius<=0){
			var index ;
			for(var i=0;i<balls.length;i++){
				if(balls[i]==this){
					index = i;
				}
			}
			balls.splice(index,1);
			console.log(balls.length);
		}
	}
}