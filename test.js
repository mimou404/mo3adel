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
function verif1() {
	aa=Number(document.getElementById('aa').value);
	bb=Number(document.getElementById('bb').value);
	cc=Number(document.getElementById('cc').value);
	dd=Number(document.getElementById('dd').value);
	ee=Number(document.getElementById('ee').value);
	ff=Number(document.getElementById('ff').value);
	gg=Number(document.getElementById('gg').value);
	hh=Number(document.getElementById('hh').value);
	ii=Number(document.getElementById('ii').value);
	jj=Number(document.getElementById('jj').value);
	kk=Number(document.getElementById('kk').value);
	if (jj>10) {
		jj=jj-10
		x=aa*2
	    x1=bb*3
	    x2=gg*3
	    x3=hh*2
	    x4=cc+dd+ee+ff+ii+jj+kk
	    z=x+x1+x2+x3+x4
	    zzz=z/16
	    ss=zzz.toFixed(2);

	}
	else{
		x=aa*2
	    x1=bb*3
	    x2=gg*3
	    x3=hh*2
	    x4=cc+dd+ee+ff+ii+jj+kk
	    z=x+x1+x2+x3+x4
	    cv=z/16
	    ss=cv.toFixed(2);
	}
	
	document.getElementById('zzz').value=ss;
	x5=ss*4
	x6=aa*1.5
	x7=bb*1.5
	x8=gg*0.5
	x9=hh*0.5
	x10=cc
	x11=ii
	wxe=x5+x6+x7+x8+x9+x10+x11
	document.getElementById('nn').value=wxe.toFixed(2);
	wxxee=wxe+wxe*7/100
	document.getElementById('nnn').value=wxxee.toFixed(2);

	
}
function verif2() {
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
	    x1=b*4
	    x2=f*4
	    x3=e+g+h+i+j+c+d
	    z=x+x1+x2+x3
	    zzz=z/17
	    ss=zzz.toFixed(2);

	}
	else{
		x=a*3
	    x1=b*4
	    x2=f*4
	    x3=e+f+g+h+i+j+c+d
	    z=x+x1+x2+x3
	    zzz=z/16
	    ss=zzz.toFixed(2);
	}
	
	document.getElementById('zz').value=ss;
	x5=ss*4
	x6=a
	x7=f*1.5
	x8=b*1.5
	x9=d*0.5
	x10=c
	x11=h
	wx=x5+x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(2);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(2);

	
}
function verif3() {
	a=Number(document.getElementById('a').value);
	b=Number(document.getElementById('b').value);
	c=Number(document.getElementById('c').value);
	d=Number(document.getElementById('d').value);
	e=Number(document.getElementById('e').value);
	f=Number(document.getElementById('f').value);
	g=Number(document.getElementById('g').value);
	h=Number(document.getElementById('h').value);
	i=Number(document.getElementById('i').value);
	if (i>10) {
		i=i-10
		x=f*4
	    x1=d*4
	    x2=c*2
	    x3=g*2
	    x4=b*3
	    x5=a+e+h+i
	    z=x+x1+x2+x3+x4+x5
	    zzz=z/18
	    ss=zzz.toFixed(2);

	}
	else{
		x=f*4
	    x1=d*4
	    x2=c*2
	    x3=g*2
	    x4=b*3
	    x5=a+e+h
	    z=x+x1+x2+x3+x4+x5
	    zzz=z/18
	    ss=zzz.toFixed(2);
	}
	
	document.getElementById('zz').value=ss;
	x6=ss*4
	x7=f*1.5
	x8=d*1.5
	x9=b
	x10=c
	x11=g
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(2);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(2);

}	
function verif4() {
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
	k=Number(document.getElementById('k').value);
	if (j>10) {
		j=j-10
		x=a*3
	    x1=b*3
	    x2=g*3
	    x3=c+d+e+f+h+i+j+k
	    z=x+x1+x2+x3
	    zzz=z/16
	    ss=zzz.toFixed(2);

	}
	else{
		x=a*3
	    x1=b*4
	    x2=g*4
	    x3=c+d+e+f+h+i+k
	    z=x+x1+x2+x3
	    zzz=z/16
	    ss=zzz.toFixed(2);
	}
	
	document.getElementById('zz').value=ss;
	x6=ss*4
	x7=f*1.5
	x8=d*1.5
	x9=b
	x10=c
	x11=g
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(2);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(2);

}	










