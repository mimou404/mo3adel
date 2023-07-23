function verif() {
	a=Number(document.getElementById('a').value);
	b=Number(document.getElementById('b').value);
	c=Number(document.getElementById('c').value);
	d=Number(document.getElementById('d').value);
	e=Number(document.getElementById('e').value);
	f=Number(document.getElementById('f').value);
	g=Number(document.getElementById('g').value);
	h=Number(document.getElementById('h').value);
	i=Number(document.getElementById('i').value);
	j=Number(document.getElementById('j').value);
	if (i>10) {
		i=i-10
		x=a*3
	    x1=b*3
	    x2=c*3
	    x3=d*2
	    x4=e+f+g+h+i+j
	    z=x+x1+x2+x3+x4
	    zzz=z/16
	    ss=zzz.toFixed(2);

	}
	else{
		x=a*3
	    x1=b*3
	    x2=c*3
	    x3=d*2
	    x4=e+f+g+h+j
	    z=x+x1+x2+x3+x4
	    zzz=z/16
	    ss=zzz.toFixed(2);
	}
	
	document.getElementById('zz').value=ss;
	x5=ss*4
	x6=a*1.5
	x7=b*1.5
	x8=c*0.5
	x9=d*0.5
	x10=g
	x11=h
	wx=x5+x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(2);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(2);

	
}
