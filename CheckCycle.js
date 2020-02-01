let dfs = require('./dfs');

function checkCycle(gr){

    let graph = {...gr};
    setWhite(graph);
    
    //console.log(graph.adjList);

    let cycle = false;

    for(let u of Array.from(graph.adjList.keys())){
        if(u.color == 'WHITE'){
         if(DFS(graph,u)) return true;
        }
        console.log(u.color)

    }
    return false;
}

function DFS(graph,u){
    u.color = 'GREY';
    
    for(let v of graph.adjList.get(u)){
        if(v.color == 'GREY'){
            return true;
        }
        if(v.color == 'WHITE'){
            if(DFS(graph,v)) return true;
        }
        
    }
    u.color = 'BLACK';
   
}

function setWhite(graph){
    for(let u of Array.from(graph.adjList.keys())){
        u.color = 'WHITE';
    }
}   

module.exports = checkCycle;
