# connect-azure

Azure Table Storage session store for [Connect](https://github.com/senchalabs/connect) and [Express](http://expressjs.com/)

[![npm version](https://img.shields.io/npm/v/connect-azure.svg)](https://www.npmjs.com/package/connect-azure)

## Usage

```js
const session = require('express-session');
const AzureStore = require('connect-azure')(session);

const store = new AzureStore({account, key});
const sessionMiddleware = session({ secret: 'keyboard cat', store });
app.use(sessionMiddleware);
```
