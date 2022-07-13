//não pode simplesmente testar como != ''; isso me deixou perplexo no começo e depois me lembrei do operador typeof :)
function  filter_list ( l )  {
    // Retorna um novo array com as strings filtradas
  return  l . filter (  str  =>  typeof  str  !=  'string' ) ;
}
 ou esse
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}
