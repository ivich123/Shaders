// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform int nceldes;

void main()
{	
	float s = gl_TexCoord[0].s*float(nceldes);
	float t = gl_TexCoord[0].t*float(nceldes);
	if(mod(s,2.0) <= 1.0 && mod(t,2.0) <= 1.0)gl_FragColor=vec4(0,0,0,0);
	else if(mod(s,2.0) >= 1.0 && mod(t,2.0) >= 1.0)gl_FragColor=vec4(0,0,0,0);	
	else gl_FragColor = vec4(0.7,0.7,0.7,0.7);
}
