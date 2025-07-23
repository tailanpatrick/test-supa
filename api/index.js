import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.get('/test-connection', async (req, res) => {
	try {
		await prisma.$connect();
		res.json({ status: 'Conexão OK' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	} finally {
		await prisma.$disconnect();
	}
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
