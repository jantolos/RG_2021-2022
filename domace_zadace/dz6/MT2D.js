class MT2D{
    constructor(){
        this._matrica = [[1,0,0],[0,1,0],[0,0,1]]
    };
    
    identitet(){
        this._matrica = [[1,0,0],[0,1,0],[0,0,1]]
    }
    
    pomakni(px,py){
        var m = [[1 ,0 , px ] ,[0 ,1 , py ] ,[0 ,0 ,1]];
        this.mult(m); 
    }
    
    skaliraj(sx,sy){
        var m = [[sx,0,0],[0,sy,0],[0,0,1]]
        this.mult(m); 
    }
    
    zrcaliNaX(){
        var m = [[1,0,0],[0,-1,0],[0,0,1]]
        this.mult(m); 
    }
    
    zrcaliNaY(){
        var m = [[-1,0,0],[0,1,0],[0,0,1]]
        this.mult(m); 
    }

    rotiraj(kut){
        var convert_kut = kut* (Math.PI/180);
        var m = [[Math.cos(convert_kut), -Math.sin(convert_kut), 0],[Math.sin(convert_kut),Math.cos(convert_kut),0],[0,0,1]]
        this.mult(m); 
    }

    smicanje(alpha,beta)
    {
        var convert_alpha = (alpha*Math.PI)/180;
        var convert_beta = (beta*Math.PI)/180;
        var m = [[1,Math.tan(convert_beta),0],[Math.tan(convert_alpha),1,0],[0,0,1]]
        this.mult(m); 
    }

    mult(m) {
        let m1 = [[0,0,0],[0,0,0],[0,0,0]];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    m1[i][j] += m[i][k] * this._matrica[k][j];
                }
            }
        }
        this._matrica = m1;
    }

    lista() {
        var listaOut = [];

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                listaOut.push(this._matrica[j][i]);
            }
        }

        return listaOut;
    }

    projekcija2D(xmin, xmax, ymin, ymax) {
        this.sx = 2 / (xmax - xmin);
        this.sy = 2 / (ymax - ymin);
        this.tx = -this.sx * xmin - 1;
        this.ty = -this.sy * ymin - 1;
    }
}