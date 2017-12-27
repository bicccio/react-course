# React course

A minimal, light dev environment and the code used for a React course.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:bicccio/react-cource.git
```

Install the dependencies and start the server.

```
npm/yarn install
npm/yarn start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
