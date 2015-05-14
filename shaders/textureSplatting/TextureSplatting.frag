// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D grass;
uniform sampler2D rock;
uniform sampler2D noise;
void main()
{
	
	
	//texture2D(sampler,gl_TexCoord[0].st);
	vec4 p = texture2D(grass, gl_TexCoord[0].st); 
	vec4 q = texture2D(rock, gl_TexCoord[0].st); 
	float r = texture2D(noise, gl_TexCoord[0].st).r; 
	gl_FragColor =mix(p, q, r);
}
