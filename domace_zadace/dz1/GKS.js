/*
    This class is used for the purpose of converting Global coordinates 
    (Cartesian coordinate system) into Screen coordinates.

    Copyright (C) 2021. Jerry John Antolos, B.Sc.IT

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

class GKS{
    constructor(platno, x_min, x_max, y_min, y_max){
        this.platno = platno
        this.x_min = x_min;
        this.x_max = x_max;
        this.y_min = y_min;
        this.y_max = y_max;
        this.brojac_pomak = 0;
    };

    postaviNa(x, y){
        var pl = document.getElementById(this.platno);
        var w = pl.width;
        var h = pl.height;
        var g = pl.getContext("2d");

        var s_x = (w-0)/(this.x_max - this.x_min);
        var s_y = (0-h)/(this.y_max - this.y_min);
        var p_x = -s_x*this.x_min;
        var p_y = -s_y*this.y_max;
        var x_crtano = (s_x*x)+p_x;
        var y_crtano = (s_y*y)+p_y;
        if (this.brojac_pomak == 0) {
            g.beginPath();
            g.moveTo(x_crtano, y_crtano);
            this.brojac_pomak += 1;
        }
        else{
            g.moveTo(x_crtano, y_crtano);
            this.brojac_pomak += 1;
        }
    };
    linijaDo(x, y){
        var pl = document.getElementById(this.platno);
        var w = pl.width;
        var h = pl.height;
        var g = pl.getContext("2d");

        var s_x = (w-0)/(this.x_max - this.x_min);
        var s_y = (0-h)/(this.y_max - this.y_min);
        var p_x = -s_x*this.x_min;
        var p_y = -s_y*this.y_max;
        var x_crtano = (s_x*x)+p_x;
        var y_crtano = (s_y*y)+p_y;
        g.lineTo(x_crtano, y_crtano);
        
    };
    koristiBoju(c){
        var pl = document.getElementById(this.platno);
        var g = pl.getContext("2d");

        g.strokeStyle = c;
    };
    povuciLiniju(){
        var pl = document.getElementById(this.platno)
        var g = pl.getContext("2d");
        g.stroke();
    };

    crtajKoordinatni(){

        this.postaviNa(0, this.y_max);
        this.linijaDo(0, this.y_min);
        this.postaviNa(this.x_max, 0);
        this.linijaDo(this.x_min, 0);
        this.povuciLiniju();

        for (let j = this.x_max - 1; j > this.x_min; j-=1) {
            this.postaviNa(j, 0+0.1);
            this.linijaDo(j, 0-0.1);
            this.povuciLiniju();
        }

        for (let k = this.y_max - 1; k > this.y_min; k-=1) {
            this.postaviNa(0+0.1, k);
            this.linijaDo(0-0.1, k);
            this.povuciLiniju();
        }
    }
}