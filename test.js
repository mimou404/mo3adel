function verif() {
	math=Number(document.getElementById('math').value);
	algo=Number(document.getElementById('algo').value);
	sti=Number(document.getElementById('sti').value);
	phy=Number(document.getElementById('phy').value);
	phil=Number(document.getElementById('phil').value);
	arab=Number(document.getElementById('arab').value);
	fran=Number(document.getElementById('fran').value);
	ang=Number(document.getElementById('ang').value);
	opt=Number(document.getElementById('opt').value);
	sport=Number(document.getElementById('sport').value);
	
	if (document.getElementById('mycheck').checked==true) {
		if (opt>10) {
		opt=opt-10
		x=math*3
	    x1=algo*3
	    x2=sti*3
	    x3=phy*2
	    x4=phil+arab+fran+ang+opt
	    z=x+x1+x2+x3+x4
	    zzz=z/15
	    ss=zzz.toFixed(2);


	}
	else{
		x=math*3
	    x1=algo*3
	    x2=sti*3
	    x3=phy*2
	    x4=phil+arab+fran+ang
	    z=x+x1+x2+x3+x4
	    zzz=z/15
	    ss=zzz.toFixed(2);
	}
	document.getElementById('zz').value=ss;
	x5=ss*4
	x6=math*1.5
	x7=algo*1.5
	x8=sti*0.5
	x9=phy*0.5
	x10=fran
	x11=ang
	wx=x5+x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);
	}
	else{
		if (opt>10) {
		opt=opt-10
		x=math*3
	    x1=algo*3
	    x2=sti*3
	    x3=phy*2
	    x4=phil+arab+fran+ang+opt+sport
	    z=x+x1+x2+x3+x4
	    zzz=z/16
	    ss=zzz.toFixed(2);

	}
	else{
		x=math*3
	    x1=algo*3
	    x2=sti*3
	    x3=phy*2
	    x4=phil+arab+fran+ang+sport
	    z=x+x1+x2+x3+x4
	    zzz=z/16
	    ss=zzz.toFixed(2);
	}
	}
	document.getElementById('zz').value=ss;
	x5=ss*4
	x6=math*1.5
	x7=algo*1.5
	x8=sti*0.5
	x9=phy*0.5
	x10=fran
	x11=ang
	wx=x5+x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);

	
}

function verif1() {
	math=Number(document.getElementById('math').value);
	gest=Number(document.getElementById('gest').value);
	fran=Number(document.getElementById('fran').value);
	phil=Number(document.getElementById('phil').value);
	info=Number(document.getElementById('info').value);
	arab=Number(document.getElementById('arab').value);
	eco=Number(document.getElementById('eco').value);
	hgeo=Number(document.getElementById('hgeo').value);
	ang=Number(document.getElementById('ang').value);
	opt=Number(document.getElementById('opt').value);
	sport=Number(document.getElementById('sport').value);
	if (document.getElementById('mycheck').checked==true) {
	    if (opt>10) {
		    opt=opt-10
		    x=math*2
	        x1=gest*3
	        x2=eco*3
	        x3=hgeo*2
	        x4=fran+phil+info+arab+ang+opt
	        z=x+x1+x2+x3+x4
	        zzz=z/15
	        ss=zzz.toFixed(2);

	}
	    else{
		    x=math*2
	        x1=gest*3
	        x2=eco*3
	        x3=hgeo*2
	        x4=fran+phil+info+arab+ang
	        z=x+x1+x2+x3+x4
	        zzz=z/15
	        ss=zzz.toFixed(2);
	}
	document.getElementById('zzz').value=ss;
	x5=ss*4
	x6=eco*1.5
	x7=gest*1.5
	x8=math*0.5
	x9=hgeo*0.5
	x10=fran
	x11=ang
	wxe=x5+x6+x7+x8+x9+x10+x11
	document.getElementById('nn').value=wxe.toFixed(3);
	wxxee=wxe+wxe*7/100
	document.getElementById('nnn').value=wxxee.toFixed(3);
    }
    else{
    	if (opt>10) {
		    opt=opt-10
		    x=math*2
	        x1=gest*3
	        x2=eco*3
	        x3=hgeo*2
	        x4=fran+phil+info+arab+ang+opt+sport
	        z=x+x1+x2+x3+x4
	        zzz=z/16
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=math*2
	        x1=gest*3
	        x2=eco*3
	        x3=hgeo*2
	        x4=fran+phil+info+arab+ang+sport
	        z=x+x1+x2+x3+x4
	        zzz=z/16
	        ss=zzz.toFixed(2);
	    }
    }
    document.getElementById('zzz').value=ss;
	x5=ss*4
	x6=eco*1.5
	x7=gest*1.5
	x8=math*0.5
	x9=hgeo*0.5
	x10=fran
	x11=ang
	wxe=x5+x6+x7+x8+x9+x10+x11
	document.getElementById('nn').value=wxe.toFixed(3);
	wxxee=wxe+wxe*7/100
	document.getElementById('nnn').value=wxxee.toFixed(3);

}
function verif2() {
	math=Number(document.getElementById('math').value);
	svt=Number(document.getElementById('svt').value);
	fran=Number(document.getElementById('fran').value);
	phil=Number(document.getElementById('phil').value);
	info=Number(document.getElementById('info').value);
	phy=Number(document.getElementById('phy').value);
	arab=Number(document.getElementById('arab').value);
	ang=Number(document.getElementById('ang').value);
	opt=Number(document.getElementById('opt').value);
	sport=Number(document.getElementById('sport').value);
	if (document.getElementById('mycheck').checked==true) {
	    if (opt>10) {
		    opt=opt-10
		    x=math*3
	        x1=svt*4
	        x2=phy*4
	        x3=info+arab+ang+opt+fran+phil
	        z=x+x1+x2+x3
	        zzz=z/16
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=math*3
	        x1=svt*4
	        x2=phy*4
	        x3=info+arab+ang+fran+phil
	        z=x+x1+x2+x3
	        zzz=z/16
	        ss=zzz.toFixed(2);
	    }
	
	document.getElementById('zz').value=ss;
	x5=ss*4
	x6=math
	x7=phy*1.5
	x8=svt*1.5
	x9=fran
	x10=ang
	wx=x5+x6+x7+x8+x9+x10
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);
    }
    else{
    	if (opt>10) {
		    opt=opt-10
		    x=math*3
	        x1=svt*4
	        x2=phy*4
	        x3=info+arab+ang+opt+sport+fran+phil
	        z=x+x1+x2+x3
	        zzz=z/17
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=math*3
	        x1=svt*4
	        x2=phy*4
	        x3=info+arab+ang+sport+fran+phil
	        z=x+x1+x2+x3
	        zzz=z/17
	        ss=zzz.toFixed(2);
	    }
    }
    document.getElementById('zz').value=ss;
	x5=ss*4
	x6=math
	x7=phy*1.5
	x8=svt*1.5
	x9=fran
	x10=ang
	wx=x5+x6+x7+x8+x9+x10
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);
    
	
}
function verif3() {
	isla=Number(document.getElementById('isla').value);
	hgeo=Number(document.getElementById('hgeo').value);
	fran=Number(document.getElementById('fran').value);
	phil=Number(document.getElementById('phil').value);
	info=Number(document.getElementById('info').value);
	arab=Number(document.getElementById('arab').value);
	ang=Number(document.getElementById('ang').value);
	opt=Number(document.getElementById('opt').value);
	sport=Number(document.getElementById('sport').value);
	if (document.getElementById('mycheck').checked==true) {
	    if (opt>10) {
		    opt=opt-10
		    x=arab*4
	        x1=phil*4
	        x2=fran*2
	        x3=ang*2
	        x4=hgeo*3
	        x5=isla+info+opt
	        z=x+x1+x2+x3+x4+x5
	        zzz=z/17
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=arab*4
	        x1=phil*4
	        x2=fran*2
	        x3=ang*2
	        x4=hgeo*3
	        x5=isla+info+opt
	        z=x+x1+x2+x3+x4+x5
	        zzz=z/17
	        ss=zzz.toFixed(2);
	    }
	
	document.getElementById('zz').value=ss;
	x6=ss*4
	x7=arab*1.5
	x8=phil*1.5
	x9=hgeo
	x10=fran
	x11=ang
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);
    }
    else{
    	if (opt>10) {
		    opt=opt-10
		    x=arab*4
	        x1=phil*4
	        x2=fran*2
	        x3=ang*2
	        x4=hgeo*3
	        x5=isla+info+opt+sport
	        z=x+x1+x2+x3+x4+x5
	        zzz=z/18
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=arab*4
	        x1=phil*4
	        x2=fran*2
	        x3=ang*2
	        x4=hgeo*3
	        x5=isla+info+opt+sport
	        z=x+x1+x2+x3+x4+x5
	        zzz=z/18
	        ss=zzz.toFixed(2);
	    }
    }
    document.getElementById('zz').value=ss;
	x6=ss*4
	x7=arab*1.5
	x8=phil*1.5
	x9=hgeo
	x10=fran
	x11=ang
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);

}	
function verif4() {
	math=Number(document.getElementById('math').value);
	tech=Number(document.getElementById('tech').value);
	fran=Number(document.getElementById('fran').value);
	phil=Number(document.getElementById('phil').value);
	info=Number(document.getElementById('info').value);
	arab=Number(document.getElementById('arab').value);
	phy=Number(document.getElementById('phy').value);
	techTp=Number(document.getElementById('techTp').value);
	ang=Number(document.getElementById('ang').value);
	opt=Number(document.getElementById('opt').value);
	sport=Number(document.getElementById('sport').value);
	if (document.getElementById('mycheck').checked==true) {
	    if (opt>10) {
		    opt=opt-10
		    x=math*3
	        x1=tech*3
	        x2=phy*3
	        x3=fran+phil+info+arab+techTp+ang+opt
	        z=x+x1+x2+x3
	        zzz=z/15
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=math*3
	        x1=tech*3
	        x2=phy*3
	        x3=fran+phil+info+arab+techTp+ang+opt
	        z=x+x1+x2+x3
	        zzz=z/15
	        ss=zzz.toFixed(2);
	    }
	
	document.getElementById('zz').value=ss;
	x6=ss*4
	x7=math*1.5
	x8=tech*1.5
	x9=phy
	x10=fran
	x11=ang
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);
    }
    else{
    	if (opt>10) {
		    opt=opt-10
		    x=math*3
	        x1=tech*3
	        x2=phy*3
	        x3=fran+phil+info+arab+techTp+ang+opt+sport
	        z=x+x1+x2+x3
	        zzz=z/16
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=math*3
	        x1=tech*3
	        x2=phy*3
	        x3=fran+phil+info+arab+techTp+ang+opt+sport
	        z=x+x1+x2+x3
	        zzz=z/16
	        ss=zzz.toFixed(2);
	    }
    }
    document.getElementById('zz').value=ss;
	x6=ss*4
	x7=math*1.5
	x8=tech*1.5
	x9=phy
	x10=fran
	x11=ang
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);
}	
function verif5() {
	math=Number(document.getElementById('math').value);
	svt=Number(document.getElementById('svt').value);
	fran=Number(document.getElementById('fran').value);
	phil=Number(document.getElementById('phil').value);
	info=Number(document.getElementById('info').value);
	phy=Number(document.getElementById('phy').value);
	arab=Number(document.getElementById('arab').value);
	ang=Number(document.getElementById('ang').value);
	opt=Number(document.getElementById('opt').value);
	sport=Number(document.getElementById('sport').value);
	if (document.getElementById('mycheck').checked==true) {
	    if (opt>10) {
		    opt=opt-10
		    x=math*4
	        x1=phy*4
	        x2=svt+fran+phil+info+arab+ang+opt
	        z=x+x1+x2
	        zzz=z/14
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=math*4
	        x1=phy*4
	        x2=svt+fran+phil+info+arab+ang+opt
	        z=x+x1+x2
	        zzz=z/14
	        ss=zzz.toFixed(2);
	    }
	
	document.getElementById('zz').value=ss;
	x6=ss*4
	x7=math*2
	x8=phy*1.5
	x9=svt*0.5
	x10=fran
	x11=ang
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);
    }
    else{
    	if (opt>10) {
		    opt=opt-10
		    x=math*4
	        x1=phy*4
	        x2=svt+fran+phil+info+arab+ang+opt+sport
	        z=x+x1+x2
	        zzz=z/15
	        ss=zzz.toFixed(2);

	    }
	    else{
		    x=math*4
	        x1=phy*4
	        x2=svt+fran+phil+info+arab+ang+opt+sport
	        z=x+x1+x2
	        zzz=z/15
	        ss=zzz.toFixed(2);
	    }
    }
    document.getElementById('zz').value=ss;
	x6=ss*4
	x7=math*2
	x8=phy*1.5
	x9=svt*0.5
	x10=fran
	x11=ang
	wx=x6+x7+x8+x9+x10+x11
	document.getElementById('n').value=wx.toFixed(3);
	wxx=wx+wx*7/100
	document.getElementById('nn').value=wxx.toFixed(3);

}	
