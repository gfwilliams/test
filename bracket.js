var a = CSG.cube();
var b = CSG.sphere({ radius: 1.35 });
a.setColor(1, 1, 0);
b.setColor(0, 0.5, 1);
return a.subtract(b);

