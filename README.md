@oauth-everything/profile
=========================

This package provides type information for the standard @oauth-everything
social profile. It has no actual code and should only be added as a dev
dependency.

The @oauth-everything social profile extends the passport.js [user profile](http://www.passportjs.org/docs/profile/)
with extra properties from the [Portable Contacts Draft Spec](http://portablecontacts.net/draft-spec/)
as well as some common custom properties. It is used in all @oauth-everything strategies.

## Instalation
```bash
npm install --save-dev @oauth-everything/profile
```

## Usage
```ts
import { Profile } from '@oauth-everything/profile';
```
