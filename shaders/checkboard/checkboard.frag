// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;

void main()
{	
	float s = gl_TexCoord[0].s*8.0;
	float t = gl_TexCoord[0].t*8.0;
	if(mod(s,2.0) <= 1.0 && mod(t,2.0) <= 1.0)gl_FragColor=vec4(0,0,0,0);
	else if(mod(s,2.0) >= 1.0 && mod(t,2.0) >= 1.0)gl_FragColor=vec4(0,0,0,0);	
	else gl_FragColor = vec4(0.7,0.7,0.7,0.7);
}
