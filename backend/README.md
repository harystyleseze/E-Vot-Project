# GETTING STARTED

Make sure to navigate to the backend folder

```
npm install
```

```
node server.js
```
# To generate definition.js or definition.json

```
composedb composite:create models/model.graphql --output=__generated__/definition.json
composedb composite:compile __generated__/definition.json --output=__generated__/definition.js
```

Why is it needed?
  definition.js file is needed because it defines data models and GraphQL schema for ComposeDB. Without it, ComposeClient won't know how to interact with Ceramic.

# To test the database server

RUN 
```
node server.js
```

Open http://localhost:4000/graphql

