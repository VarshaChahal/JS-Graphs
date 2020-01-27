let dfs = require('./dfs');


function topSort(graph){
    dfs(graph);

    //sort the array in reverse order by node's finishing time
    let arr = Array.from(graph.adjList.keys()).sort((a,b)=>b.f-a.f);
    for(let v of arr){
        console.log(v.vertex);
    }
}

module.exports = topSort;
