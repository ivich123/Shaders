// simple vertex shader
uniform bool eyespace;
uniform float time;
void main()
{
	
	if(eyespace){
		float pi = 3.1416;
		gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
		float A = gl_Position.y;
		float d = A*sin(time);
		gl_Position.xyz = gl_Normal*d;
		gl_FrontColor  = gl_Color;
		gl_TexCoord[0] = gl_MultiTexCoord0;
	}
}
