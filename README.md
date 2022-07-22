# Introduction

This is a test repo to demonstrate the Cypress login failure.

It contains no private wiris code or anything that could be considered sensitive, except for the cypress.env file which is ignored.

You need to create the cypress.env file by yourself as follows, then just run `npm test` after installing dependencies with `npm install`

```JSON
{
  "googleUser": "qa@wiris.com",
  "password": "PASS",
  "testDocumentURL": "document/d/1-DXdfm6zTGDWz9Ygw_nYDvHHqnJm8UPudPZNo6C3rSs/edit"
}
```

testDocumentURL is still unused and *might* be used if we get this test to work.
