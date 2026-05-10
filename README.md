This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

```
cp \
    .env.template \
    .env
```
and fill in all missing values

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Notes

this is a one-page project



```
# why this project will NOT be using web hooks

we want to save that user in the database

...
doing that is ... pretty simple and there's a lot of different ways to do this

...
initially I was going to use something called «web hooks» to run a function when a user is created 
(
that takes some extra work
because you need to make your app publicly accessible,
so when we're working locally like we are right now,
we would need to use something like `ngrok` [-]
this is initially what I was going to do but I ran into some issues
where I had to deal with ... opening ports on my router

some things are just not great for tutorials even if ... that's the more common way to do it



... what we're going to do is something very simple -
we're just going to create a utility called `checkUser` ...:
- it's going to get the current ... logged in ... «Clerk user»
  and see if that user is already in the database;
  if it isn't[,] then it's just going to add that user to the database...;
  and it's just going to return the user if it's already there;
```
