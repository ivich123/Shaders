// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;

void main()
{
	vec2 c = vec2(0.5,0.5);
	float radi = 0.2;
	if(distance(c, gl_TexCoord[0].st) <= 0.2) gl_FragColor = vec4(1,0,0,0);
	else gl_FragColor = gl_Color;
}
