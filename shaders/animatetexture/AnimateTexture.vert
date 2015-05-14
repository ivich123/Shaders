// simple vertex shader

uniform float time;
uniform float f;
uniform float a;

void main()
{
	
	float pi = 3.1416;
	//A * sin(2pi*temps*freq)
	vec3 res = gl_Normal*(a * sin(2*pi*time*f));
	res = res + vec3(gl_Vertex);
	gl_Position    = gl_ModelViewProjectionMatrix * vec4(res,1.0);
	gl_FrontColor  = vec4((gl_NormalMatrix*gl_Normal).z);
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
