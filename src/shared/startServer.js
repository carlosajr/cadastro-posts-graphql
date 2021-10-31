import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose';

async function startServer({ typeDefs, resolvers }) {
    await mongoose.connect('mongodb://localhost:27017/graphql');
    console.log('Database Connected');

    const server = new ApolloServer({ typeDefs, resolvers });
    const serverListen = await server.listen();
    console.log(`server started at ${serverListen.url}`);
}

export default startServer;