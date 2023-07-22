function verif() {
	a=document.getElementById('a').value;
	b=ocument.getElementById('b').value;
	c=document.getElementById('c').value;
	d=document.getElementById('d').value;
	e=document.getElementById('e').value;
	f=document.getElementById('f').value;
	g=document.getElementById('g').value;
	h=document.getElementById('h').value;
	i=document.getElementById('i').value;
	j=document.getElementById('j').value;
	zz=document.getElementById('zz').value;
	n=document.getElementById('n').value;
	if (a.length!=2) {
		alert("invalide");
	}
	x=a*3
	x1=b*3
	x2=c*3
	x3=d*2
	x4=e+f+g+h+i+j
	z=x+x1+x2+x3+x4
	zz=z/16
	document.write('zz');
}