# connect-azure

Azure Table Storage session store for [Connect](https://github.com/senchalabs/connect) and [Express](http://expressjs.com/)

[![npm version](https://img.shields.io/npm/v/connect-azure.svg)](https://www.npmjs.com/package/connect-azure)
[![Code Climate](https://codeclimate.com/github/perfilyev/connect-azure/badges/gpa.svg)](https://codeclimate.com/github/perfilyev/connect-azure)
[![Coverage Status](https://coveralls.io/repos/github/perfilyev/connect-azure/badge.svg)](https://coveralls.io/github/perfilyev/connect-azure)
[![Build Status](https://travis-ci.org/perfilyev/connect-azure.svg?branch=master)](https://travis-ci.org/perfilyev/connect-azure)
![ES 2015](https://img.shields.io/badge/es-2015-yellow.svg)
![Node 6](https://img.shields.io/badge/node-v6.0-yellow.svg)

## Usage

```js
const session = require('express-session');
const AzureStore = require('connect-azure')(session);

const store = new AzureStore({account, key});
const sessionMiddleware = session({ secret: 'keyboard cat', store });
app.use(sessionMiddleware);
```
