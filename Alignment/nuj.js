// let http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('nyob zoo rau koj os node');
// }).listen(5000);
// 1 yog kev createserver ces yuav tsum muaj lis no


// let http = require('http');
// let dt =require('./myseconmodule');
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('The date and time are curently:' +dt.myDateTime());
//     res.end();
// }).listen(5000);
// 2. yog kev ua module rau yus siv uas yog tsiv los ntawm yus tus kheej


// let http = require('http');
// let dt =require('./myseconmodule');
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(5000);
// 3. yog kev nyeem url los ntawm req uas muaj pheem xwm ua tau


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     let q = url.parse(req.url,true).query;
//     let txt = q.year+""+q.month;
//     res.end(txt);
// }).listen(5000);
// 4. yog kev faij los sis faib quere stirng ua nws muaj pheem xwm ua tau


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('index.htm',function(err,data){
//         res.writeHead(2020,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);
// 5. yog kev read los nws nws puaj pheev xwm nyeem file tau 


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('index.htm',function(err,data){
//         res.writeHead(2020,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);
// fs.appendFile('mynewfile.txt','nyob zo rau koj',function(err){
//     if(err)throw err;
//     console.log('save');
// })
// 6. yog kev nyeem file yog tias nws tsis muaj ces yuav raug create kom muaj 


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('index.htm',function(err,data){
//         res.writeHead(2020,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);
// fs.open('mynewfile1.txt','w',function(err, file){
//     if(err)throw err;
//     console.log('save');
// })
// 7. yog kev nyeem tab mam nws muaj pheev xwm create xwb


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('index.htm',function(err,data){
//         res.writeHead(2020,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);
// fs.writeFile('mynewfile2.txt','nyob zo rau koj',function(err){
//     if(err)throw err;
//     console.log('save');
// })
// 8. yog kev create file thaib sau qhov yus xav tau mus txim 


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('index.htm',function(err,data){
//         res.writeHead(2020,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);
// fs.appendFile('mynewfile.txt','nyob zo rau koj',function(err){
//     if(err)throw err;
//     console.log('save');
// })
// 9. yog kev update file xwb tsis xav sau mu txim hauv file 


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('index.htm',function(err,data){
//         res.writeHead(2020,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);
// fs.unlink('mynewfile.txt',function(err){
//     if(err)throw err;
//     console.log('save');
// })
// 10. yog muaj file pov tseg mus los sis yog delete file 


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     fs.readFile('index.htm',function(err,data){
//         res.writeHead(2020,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(5000);
// fs.rename('mynewfile.txt','nyob.txt',function(err){
//     if(err)throw err;
//     console.log('save');
// })
// 11. yog kev npaum npe file uas nws muaj peev xwm ua tau 


// let http = require('http');
// let dt =require('./myseconmodule');
// let url = require('url');
// let fs = require('fs');
// let adr = 'http://localhost:5000/default.html?year=2020&month=november';
// let q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// let qdata = q.query;
// console.log(qdata.month);
// 12. yog kev siab seb nws yog nyob rau port dad tsis thiab lwm lwm yam


// let http = require('http');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     let q = url.parse(req, url,true);
//     let filename = "."+q.path;
//     fs.readFile(filename,function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             return res.end('404 not found');
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('data');
//         return res.end();
//     })
// }).listen(5000);
// 13. yog kev nyeem file name uas yog html los sis lwm yam los tau
//     ua nws muaj tab mam yuav tsum sau nyob rau saum URL 


// let http = require('http');
// let url = require('url');
// let fs = require('fs');
// http.createServer(function(req, res){
//     let q = url.parse(req, url,true);
//     let filename = "."+q.path;
//     fs.readFile(filename,function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             return res.end('404 not found');
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('data');
//         return res.end();
//     })
// }).listen(5000);
// 14. yog kev rub module coj los siv ua yog yuav tsum sua lis no
//    npm i ...


// let http = require('http');
// let url = require('url');
// let fs = require('fs');
// let uc = require('upper-case');
// http.createServer(function(req, res){
//    res.writeHead(200,{'Content-Type':'text/html'});
//    res.write(uc.upperCase('nujsuahawj'));
//    res.end();
// }).listen(5000);
// 15. yog kev sim module upperCase uas yus mus rub los ntawm


let formidable =require('formidable');
let http = require('http');
let fs =require('fs');
http.createServer(function(req,res){
    if (req.url =='/fileupload'){
        let form= new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            res.write('file uploaded');
            res.end();
        })
    }else{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
    

}).listen(5000);