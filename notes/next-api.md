# NEXT API

## Response

```js
return Response.json(result, { status: 201 });
```

```javascript
req props = method,...
```

## Get Params

```js
const { searchParams } = new URL(request.url);
const name = searchParams.get("name");
```

## Redirect

```js
import { redirect } from "next/navigation";
...
redirect("https://nextjs.org/");
```
