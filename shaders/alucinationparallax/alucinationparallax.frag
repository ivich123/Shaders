// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D map;
uniform float a;

void main()
{
	float pi = 3.1416;
	float phi = 2.0*pi*time;
	vec3 c =  texture2D(map, gl_TexCoord[0].st).rgb; 
	float aux = max(c.x, c.y);
	float m = max(aux, c.z);
	vec2 u = vec2(m, m);
	mat2 rot = mat2(cos(phi), sin(phi),
					-sin(phi), cos(phi));
	vec2 pos = rot*u;
	vec2 offset = (a/100.0)*pos;
	gl_FragColor = texture2D(map, gl_TexCoord[0].st+offset);
}
