const path=require("path");
module.exports={
    mode:"production",
    entry:'./src/home.js',
    output:{
        path:path.resolve(__dirname,'../dist/'),
        filename:'[name].[hash].js'
    }
}