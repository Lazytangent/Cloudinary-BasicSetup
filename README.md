# Cloudinary Basic Setup

## Install

Install the following packages in the backend:

* `cloudinary`
* `datauri`
* `multer`

## `.env` in backend

Add your `CLOUDINARY_URL` to the backend `.env` file.

## Check out `backend/cloudinary.js`

## Update your `csrfFetch`

This setup uses a custom fetch function to pass the necessary csrf token to the
backend with any request that wasn't a `GET` request. If you already have this
function, then you'll want to add a few lines to yours to make sure the fetch
works with Multer, one of the middleware functions we're using in the backend.

If you don't have the custom fetch function, then make sure that you DON'T
include the `Content-Type` header in your fetch call when passing `FormData` to
the backend.

The main if block will be changed to this
```js
if (options.method.toUpperCase() !== 'GET') {
  if (options.headers["Content-Type"] === "multipart/form-data") {
    delete options.headers["Content-Type"];
  } else {
    options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
  }
  options.headers["XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
}
```

The whole custom fetch function ends up as:
```js
export async function csrfFetch(url, options = {}) {
  options.method = options.method || 'GET';
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== 'GET') {
    if (options.headers["Content-Type"] === "multipart/form-data") {
      delete options.headers["Content-Type"];
    } else {
      options.headers['Content-Type'] =
        options.headers['Content-Type'] || 'application/json';
    }
    options.headers['XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
  }

  const res = await window.fetch(url, options);

  if (res.status >= 400) throw res;

  return res;
}
```
