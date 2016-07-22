### JWT

## header:

		{
			typ: 'jwt',
			alg: 'HS256'
		}


## payload:

		{
			"iss" : "http://myapi.com",		// reserved claim of API that issued the
			"user": "nodebotanist"				// user, username
		}

## JWT signature

HMAC256(
	base64UrlEncode(header) +
	'.' +
	base64UrlEncode(payload),
	secret
);

A finished token looks like:

j29dj1j90j139dj02j9j2.1293j2109s10j0s91.d1902j92j10js100

[encoded header].[encoded payload].[signature]



### When making API requests, pass this in the header:

Authorization: Bearer <json-web-token that you got back when you authorized>
