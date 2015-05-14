// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec3 NDC;
void main()
{
	if(NDC.x >= time-1.0) discard;
	else gl_FragColor = vec4(0,0,1,0);
}
