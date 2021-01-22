## Creating a Headless Flexible Content Project

We will need to create a new next js instance and a fresh sanity instance.
Starting with the next js project which will also create the repository we will want to run:

```
npx create-next-app
# or
yarn create next-app
```

In the directory of your choice inside your terminal/bash.

We will then inside this repository need to create the sanity studio.
This can be done by running:

```
sanity init
```

Inside your terminal/bash. This will require the sanity CLI which if you don't have installed can be installed by: 

```
npm install -g @sanity/cli
```
or by following - https://www.sanity.io/docs/getting-started-with-sanity-cli.

### Pitfalls

When setting up a project of this stack there are a couple of easy bugs to run into.

If you are having problems with vercel and it not being able to find `@sanity/core` make sure you have lerna setup.
This will bootstrap the project with the studio package.json dependencies so that they can be used by the vercel.

Another issue I ran into was `Error: Invalid 'paths' value returned from getStaticPaths in /[slug].`
This is can be caused by the client using the wrong project ID from vercel environment variables not matching the project you are using.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
