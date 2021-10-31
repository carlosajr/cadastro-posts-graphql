import path from 'path';

import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

const typesArray = loadSchemaSync(path.join('src', 'modules', '**', 'graphql', 'schemas', '*.gql'), {
    loaders: [
        new GraphQLFileLoader(),
    ]
});

const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;