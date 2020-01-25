function bfs(graph, src){
    let arr = new Array();
    
    //color:
    // WHITE - node not visited
    //GRAY - node visited but all its adjacent nodes are not visited
    //BLACK - node visited as well as its adjacent nodes
    src.color = "GREY";
    src.dist = 0;
    src.pred = null;

    arr.push(src);

    while(arr.length>0){
        let u = arr.shift();

           for(let entry of graph.adjList.get(u)){
            if(entry.color == "WHITE"){
                entry.color = "GRAY";
                entry.dist = u.dist+1;
                entry.pred = u;
                arr.push(entry);
            }
        }

        u.color = "BLACK";
    }

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