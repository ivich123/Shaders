// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D sampler;
void main()
{
	vec2 ivich = gl_TexCoord[0].st;
	//ivich.s += time*0.1;
	//ivich.t += time*0.1;
	//A * sin(2pi*temps*freq)

	gl_FragColor = gl_Color;
}
