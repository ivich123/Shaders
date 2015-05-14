// simple vertex shader
varying vec3 NDC;
void main()
{
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
	float w = gl_Position.w;
	NDC =  vec3(gl_Position.x/w, gl_Position.y/w,gl_Position.z/w);
}
