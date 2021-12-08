This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the web app.

First, make sure you have Node v16.13.0 or above installed.

You also need npm v8 or higher and Postgres v14 or higher.

To run the development server:

```bash
npm run dev
# or
yarn dev
```
You also need to generate the prisma client:

```
npx prisma generate
```
You also need to provide your own apiKey in a env.local file for the program to operate:
```
touch env.local
```
And in the file write 
```
GOOGLE_API_KEY=(your key here)
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
