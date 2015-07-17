/* Array example to use with routeMaker
var array = [
  {
    method:'get',
    cb:[cb1, cb2, cb3, cb4], # OR #cb: cb1,
    url:['/','/local'] # OR # url: '/'
  }
];
*/
function routeMaker(rotas,router){
  for(rota in rotas){
    router[rotas[rota].method](rotas[rota].url,rotas[rota].cb);
  }
}
module.exports = routeMaker;
