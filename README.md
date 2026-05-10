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



```
# why this project will NOT be using web hooks

32:39
set up and you can you can add you know checks if you want to show something if the users logged in or whatever but we
32:46
want to save that user in the database okay and doing that is is
32:51
pretty simple and there's a lot of different ways to do this so initially I was going to use something called Web
32:57
hooks to run a function when a user is created because you can do that and that takes some extra work because you need
33:03
to make your app publicly accessible so when we're working locally like we are
33:09
right now we would need to use something like enro and this is initially what I was going to do but I ran into some
33:16
issues where I had to deal with uh opening ports on my router and I don't want you guys to have to do that I don't
33:22
want to have a project that you know a quarter of the way through you can't continue because you have some firewall
33:28
issue or whatever um so some things are just not great for tutorials even if
33:33
even if that's the more common way to do it um but what we're going to do is something very simple we're just going
33:39
to create a utility called check user and it's going to get the current user
33:44
you know the logged in user the clerk user and see if that user is already in the database if it isn't then it's just
33:52
going to add that user to the database okay and it's just going to return the user if it's already there it'll just
33:57
get it and return it so let's put that in the lib folder so we going to create a file here we're going to call it check
```
