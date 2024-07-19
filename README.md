First, build the worker package.

Note: In this simplified example this package lives in the same repo as the NextJS application using it however in a real-world scenario this would be a package installed via npmjs.org

```
cd ./worker
npm install 
npm run build
cd -
```

Next, Run the NextJS application using

```
cd ./app
npm install
npm run dev
```

Open http://localhost:3000
