// simple vertex shader
uniform float time;

void main()
{

	float phi = -time*gl_MultiTexCoord0.s;
	mat4 rot = mat4(cos(phi), 0, -sin(phi),0,
				0,       1,   0,     0,
				sin(phi), 0, cos(phi),0,
				0,         0,   0,     1);
	vec4 pos = rot*gl_Vertex;
	gl_Position    = gl_ModelViewProjectionMatrix * pos;
	gl_FrontColor  = vec4(0,0,1,0);
	gl_TexCoord[0] =gl_MultiTexCoord0;
}
