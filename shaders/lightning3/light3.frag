// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec4 pos;
varying vec3 norm;

void main()
{
	
	vec4 em = gl_FrontMaterial.emission;
	vec4 amb = gl_FrontMaterial.ambient;
	vec4 diff = gl_FrontMaterial.diffuse;
	vec4 spec = gl_FrontMaterial.specular;
	float shin = gl_FrontMaterial.shininess;
	vec4 llumamb = gl_LightModel.ambient;
	vec4 lamb = gl_LightSource[0].ambient;
	vec4 ldiff = gl_LightSource[0].diffuse;
	vec4 lspec = gl_LightSource[0].specular;
	vec3 N = normalize(gl_NormalMatrix *norm);
	vec3 L = normalize(gl_LightSource[0].position.xyz-(gl_ModelViewMatrix*pos).xyz);
	vec3 V = vec3(0,0,1);	
	//vec3 V = normalize(-gl_ModelViewMatrix * gl_Vertex);
	vec3 H = normalize (V+L);
	float NL = max(0.0, dot(N,L));
	float NH = max(0.0, dot(N,H));
	gl_FragColor = em+amb*(llumamb+lamb)+ diff*ldiff*NL + spec*lspec*(pow(NH,shin));;
}
