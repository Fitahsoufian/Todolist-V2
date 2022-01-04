// // 
// const url = require('url');
// let parsedURL = url.parse(req.url, true);
// let path = parsedURL.pathname;
// path = path.replace(/^\/+\/+$/g, "");
// console.log(path);
// let qs = parsedURL.query;
// let headers = rq.headers;
// let method = req.method.toLowerCase();

// req.on("data", function(){
//     console.log("got some data");
// });
// req.on("end", function(){
//     console.log("send a response");

//     let route =
//     typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"];
//     let data = {
//       path: path,
//       queryString: qs,
//       headers: headers,
//       method: method,
//       buffer:""
//     };
//     route(data, res);
// });

// const routes ={
//     home: function(data,res){
// let payload = {
//     name: "Home"
// }
// let payloadStr=JSON.stringify(payload);
// res.setHeader("Content-Type", "application/json");
// res.setHeader("Access-Control-Allow-Origin", "*");
// res.writeHead(200);
// res.write(payloadStr);
// res.end("\n");
//     },
//    notFound: function(data,res){
//        let payload = {
//        message:"Page Not Found",
//        code: 404
//     };
//     let payloadStr = JSON.stringify(payload);
//     res.setHeader("Content-Type", "application/json");
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.writeHead(404);
//     res.write(payloadStr);
//     res.end("\n");
//    } 
// }