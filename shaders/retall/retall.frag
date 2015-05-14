// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec3 plane;
uniform float offset;
void main()
{
	if(plane.x+plane.y+plane.z + offset <= 0.0) discard;
	else gl_FragColor = gl_Color;
}
