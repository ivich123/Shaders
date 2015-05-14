// simple vertex shader
varying vec4 pos;
varying vec3 norm;

void main()
{
	norm = gl_NormalMatrix*gl_Normal;
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
	pos = gl_Position;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
