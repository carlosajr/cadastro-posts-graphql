import { mergeResolvers } from '@graphql-tools/merge';

import postResolver from '../../modules/posts/graphql/resolvers/resolver';
import userResolver from '../../modules/users/graphql/resolvers/resolver';

const resolvers = mergeResolvers([
    postResolver,
    userResolver
]);

export default resolvers