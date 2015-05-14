void main()
{
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
        vec3 color = gl_NormalMatrix * gl_Normal;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
