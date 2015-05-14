// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec3 color;

void main()
{
	
	gl_FragColor = gl_Color * color.z;
}
