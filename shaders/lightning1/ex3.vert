// simple vertex shader

void main()
{
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	vec4 em = gl_FrontMaterial.emission;
	vec4 amb = gl_FrontMaterial.ambient;
	vec4 diff = gl_FrontMaterial.diffuse;
	vec4 spec = gl_FrontMaterial.specular;
	float shin = gl_FrontMaterial.shininess;
	vec4 llumamb = gl_LightModel.ambient;
	vec4 lamb = gl_LightSource[0].ambient;
	vec4 ldiff = gl_LightSource[0].diffuse;
	vec4 lspec = gl_LightSource[0].specular;

	vec3 N = normalize(gl_NormalMatrix * gl_Normal);
	vec3 L = normalize(gl_LightSource[0].position.xyz-(gl_ModelViewMatrix*gl_Vertex).xyz);
	vec3 V = vec3(0,0,1);	
	//vec3 V = normalize(-gl_ModelViewMatrix * gl_Vertex);
	vec3 H = normalize (V+L);
	float NL = max(0.0, dot(N,L));
	float NH = max(0.0, dot(N,H));
	gl_FrontColor  = em+amb*(llumamb+lamb)+ diff*ldiff*NL + spec*lspec*(pow(NH,shin));
	gl_TexCoord[0] = gl_MultiTexCoord0;
}



















