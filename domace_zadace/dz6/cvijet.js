window.onload = WebGLaplikacija;
    function WebGLaplikacija() {
      var platno1 = document.getElementById("slika1");
      gl = platno1.getContext("webgl2");
      if (!gl) alert("WebGL2 nije dostupan!");

      GPUprogram1 = pripremiGPUprogram(gl, "vertex-shader", "fragment-shader");
      gl.useProgram(GPUprogram1);
      GPUprogram1.u_mTrans = gl.getUniformLocation(GPUprogram1, "u_mTrans");
      GPUprogram1.u_boja = gl.getUniformLocation(GPUprogram1, "u_boja");
      
      var koordA = 0.398;
      var koordB = 0.1;
      var vrhoviK = [0.0, 0.0];
      var vrhoviE = [0.0, 0.0];

      for (var i = 0; i < 2 * Math.PI; i += 0.0001) {
        var x1 = koordB * Math.cos(i);
        var y1 = koordB * Math.sin(i);
        vrhoviK.push(x1);
        vrhoviK.push(y1);
        var x2 = koordA * Math.cos(i);
        var y2 = koordB * Math.sin(i);
        vrhoviE.push(x2);
        vrhoviE.push(y2);
      }

      function napuniSpremnike(vrhoviK, vrhoviE) {
        spremnikVrhova = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, spremnikVrhova);
        GPUprogram1.a_vrhXY = gl.getAttribLocation(GPUprogram1, "a_vrhXY");
        gl.enableVertexAttribArray(GPUprogram1.a_vrhXY);
        gl.vertexAttribPointer(GPUprogram1.a_vrhXY, 2, gl.FLOAT, false, 0, 0);
        var brojac = 0;
        if(brojac == 0){
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vrhoviK), gl.STATIC_DRAW);
          brojac++;}
        else{
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vrhoviE), gl.STATIC_DRAW);
        }
      }

      function crtajKrug() {
        gl.clearColor(0.4, 0.7, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(0, 0, platno1.width, platno1.height);
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 0.4, 0.7, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviK.length / 2);
      }

      function crtajElipsu() {
        gl.viewport(0, 0, platno1.width, platno1.height);

        var angle = Math.PI / 1;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, 0.5, 0.0, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);

        var angle = Math.PI / 3.5;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, 0.325, 0.375, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);

        var angle = Math.PI / 2;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, 0.0, 0.5, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);

        var angle = Math.PI / -3.5;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, -0.325, 0.375, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);

        var angle = Math.PI / 1;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, -0.5, 0.0, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);

        var angle = Math.PI / 3.5;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, -0.325, -0.375, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);

        var angle = Math.PI / 2;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, 0.0, -0.5, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);

        var angle = Math.PI / -3.5;
        gl.uniformMatrix3fv(GPUprogram1.u_mTrans, false,
          [Math.cos(angle), Math.sin(angle), 0.0, -Math.sin(angle), Math.cos(angle), 0.0, 0.325, -0.375, 1.0]);
        gl.uniform4fv(GPUprogram1.u_boja, [1.0, 1.0, 0.0, 1.0]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vrhoviE.length / 2);
      }

      napuniSpremnike(vrhoviK);
      crtajKrug();
      napuniSpremnike(vrhoviE);
      crtajElipsu();
    }