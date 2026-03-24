This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server for the frontend:

```bash
cd python_frontend

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Second, run the server for the backend:

```bash
cd ..

source venv/bin/activate
pip install -r requirements.txt # make sure you are on the latest version of everything

cd fastApi

uvicorn main:app

```

Finally, make sure your local mySQL server is running and follow the setup_db_init.sql file located in fastApi/:

```bash
systemctl status mysql

cat setup_db_init.sql

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
