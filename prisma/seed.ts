import { prisma } from "./db";
import { Customer, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { faker } from "@faker-js/faker";
//seeding database

const customers: Prisma.CustomerCreateInput[] = [];

async function main() {
	for (let i = 0; i < 10; i++) {
		const data: Prisma.CustomerCreateInput = {
			email: faker.internet.email(),
			gender: faker.name.gender(true),
			name: faker.name.findName(),
			password: hashSync("123456", 10),
			phone: faker.phone.phoneNumber(),
		};
		customers.push(data);
	}

	await prisma.customer.createMany({ data: customers });
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
