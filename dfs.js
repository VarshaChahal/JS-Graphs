function dfs(graph,src){
    //the iterative dfs algorithm makes use of a stack
    //stack
    let arr = new Array();

    src.color=1;
    arr.push(src);
    while(arr.length>0){
        let u = arr.pop();
        u.color=1;
        console.log(u.vertex);

        for(let v of graph.adjList.get(u)){
           if(v.color == 0){    
              v.color=1;
              arr.push(v);
           }
        }
    

    }

}

let time =0;
function recDfs(graph){
  for(let u of Array.from(graph.adjList.keys())){
      if(u.color == 0){
          DFS(graph,u);
      }
  }
}

function DFS(graph,u){
    time = time+1;
    u.color = 1;
    u.d = time;
    
    for(let v of graph.adjList.get(u)){
        if(v.color == 0){
            v.pred = u;
            DFS(graph,v);
        }
    }
    //finishing time that is v.f refers to the time when the node is discovered again but all its out edges are discovered
    time = time+1;
    u.f = time;
}

module.exports = recDfs;