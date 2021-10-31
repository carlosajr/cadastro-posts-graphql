import startServer from './shared/startServer';
import typeDefs from './shared/graphql/typeDefs';
import resolvers from './shared/graphql/resolvers';

startServer({ typeDefs, resolvers });