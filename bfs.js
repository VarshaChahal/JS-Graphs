function bfs(graph, src){
    let arr = new Array();
    //solution for finding the diameter of a tree generated from the graph by BFS
    let diam=0;
    //color:
    // WHITE - node not visited
    //GRAY - node visited but all its adjacent nodes are not visited
    //BLACK - node visited as well as its adjacent nodes
    //0-not visited, 1- visited
    src.color = 1;
    src.dist = 0;
    src.pred = null;

    arr.push(src);

    while(arr.length>0){
        let u = arr.shift();
        u.color = 1;
        for(let v of graph.adjList.get(u)){
             if(v.color == 0){
                  v.color = 1;
                  v.dist = u.dist+1;
                  v.pred = u.vertex;
                  arr.push(v);
                  diam = Math.max(diam,v.dist);
                  //print it here within the loop
              }
        }

    }
    console.log(diam);

}

//the following function can be used to output a shortest path from vertex a to b
function findShortestPath(graph,s,v){
    bfs(graph,s);
    printBFSTree(graph,s,v);
}

function printBFSTree(graph,s,v)
{
    if(s.vertex == v.vertex){
        console.log(s.vertex);
        return;
    }
    else if(v.pred == null){
        console.log("no such path exists");
        return;
    }
    else{
        printBFSTree(graph,s,v.pred);
        console.log(v.vertex);
        return;
    }
}



module.exports = {bfs: bfs,findShortestPath: findShortestPath};