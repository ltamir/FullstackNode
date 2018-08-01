# FullstackNode
# request demo (using curl)

### Server:
https://reqres.in/
---
### client (curl)

```bash
curl -X GET -v https://reqres.in/api/users?page=2
```

Request headers
```bash
> GET /api/users?page=2 HTTP/1.1
> Host: reqres.in
> User-Agent: curl/7.55.1
> Accept: */*
```

Response:
```bash
< HTTP/1.1 200 OK
< Date: Wed, 01 Aug 2018 15:59:18 GMT
< Content-Type: application/json; charset=utf-8
< Content-Length: 443
< Connection: keep-alive
< Set-Cookie: __cfduid=d71880a86c806ac5fc84b8d48dd2b97c51533139158; expires=Thu, 01-Aug-19 15:59:18 GMT; path=/; domain=.reqres.in; HttpOnly
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< ETag: W/"1bb-wM9a6JWbwt3JpLNfwoQwxnqaC3Y"
< Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
< Server: cloudflare
< CF-RAY: 443982db79dbadab-TLV
<
```
Response body
```json
{
    "page": 2,
    "per_page": 3,
    "total": 12,
    "total_pages": 4,
    "data": [
        {
            "id": 4,
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
            "id": 5,
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
            "id": 6,
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
    ]
}
```
