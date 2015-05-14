// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D sampler;
varying vec4 tex;
void main()
{
	vec2 ivich = gl_TexCoord[0].st;
	//ivich.s += time;
	//ivich.t += time;
	gl_FragColor = gl_Color*texture2D(sampler,gl_TexCoord[0].st);
}
