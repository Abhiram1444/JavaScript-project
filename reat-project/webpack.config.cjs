// const path = require("path");

// module.exports={

//  mode:"development",

// entry:"./src/task 05-08-2026/index.js",

// output:{

// filename:"bundle.js",

// path:path.resolve(__dirname,"dist"),

// clean:true

// },

// };





const path = require("path");

module.exports = {

mode:"development",

entry:"./src/task 05-08-2026/Loaders/index.js",

output:{

filename:"bundle1.js",

path:path.resolve(__dirname,"dist")

},

module:{

rules:[

{

test:/\.css$/,

use:["style-loader","css-loader"]

}

]

}

}