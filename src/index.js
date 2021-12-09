import fastify from 'fastify';
import db from './config/index';
import users from './routes/users';
import env from 'dotenv';

env.config();

const Port = process.env.PORT;
const uri = process.env.MONGODB_URI;

const app = fastify({ logger: true });

app.register(db, { uri });
app.register(users);

const start = async () => {
	try {
		await app.listen(Port);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();