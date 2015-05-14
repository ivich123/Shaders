// simple vertex shader

uniform float minY;
uniform float maxY;
vec4 cyan = vec4(0,1,1,1);
vec4 red = vec4(1,0,0,1);
vec4 green = vec4(0,1,0,1);
vec4 blue = vec4 (0,0,1,1);
vec4 yellow = vec4 (1,1,0,1);

void main()
{
	
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	float interval = (gl_Vertex.y-minY)/(maxY-minY);
	interval *= 4.0;
	if (interval >= 4.0) gl_FrontColor = blue;
	else if(interval <= 4.0 && interval > 3.0)
		gl_FrontColor = mix(cyan, blue, fract(interval));
	else if (interval <= 3.0 && interval > 2.0)
		gl_FrontColor = mix(green, cyan, fract(interval));
	else if (interval <= 2.0 && interval > 1.0)
		gl_FrontColor = mix(yellow, green, fract(interval));
	else if (interval <= 1.0 && interval > 0.0)
		gl_FrontColor = mix(red, yellow, fract(interval));
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
