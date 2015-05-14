// simple vertex shader

void main()
{
	gl_Position = gl_ModelViewProjectionMatrix * 
	vec4(normalize(vec3(gl_Vertex.x,gl_Vertex.y,gl_Vertex.z)),1.0);
	gl_FrontColor = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
