// simple vertex shader
varying vec3 plane;
void main()
{

	vec4 pos = -gl_LightSource[0].position;
	vec4 aux = gl_ModelViewMatrixInverse * pos;
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	plane = vec3(aux.x*gl_Vertex.x, aux.y*gl_Vertex.y, aux.z*gl_Vertex.z);
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
