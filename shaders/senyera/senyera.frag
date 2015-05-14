// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;

void main()
{
	float s = gl_TexCoord[0].s*9.0;
	float t = gl_TexCoord[0].t*9.0;
	if(mod(s,2.0) <= 1.0)gl_FragColor=vec4(1,1,0,0);
	else gl_FragColor = vec4(1,0,0,0);
}
