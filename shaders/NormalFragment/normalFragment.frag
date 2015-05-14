// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec4 pos;


void main()
{
	vec3 normal;
	vec4 dx = dFdx(pos);
	vec4 dy = dFdy(pos);
	normal = normalize(cross(dx.xyz, dy.xyz));
	gl_FragColor = gl_Color*normal.z;
}
