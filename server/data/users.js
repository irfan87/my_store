import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@test.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "Jone Doe",
		email: "jonedoe@test.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Jane Doe",
		email: "janedoe@test.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
