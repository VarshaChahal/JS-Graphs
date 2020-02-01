let Vertex = require('./Vertex');
let bfs = require('./bfs');
let dfs = require('./dfs');
let topSort = require('./topologicalSort');
let checkCycle = require('./CheckCycle');

class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addVertex(vertex){
        if(!this.adjList.has(vertex)){
            this.adjList.set(vertex,[]);
        }
        else{
            throw "vertex already exists";
        }
    }
    addEdge(src,dest){
        if(this.adjList.has(src)){
            if(this.adjList.has(dest)){
                let arrSrc = this.adjList.get(src);
               // let arrDest = this.adjList.get(dest);
                if(!arrSrc.includes(dest)){
                    arrSrc.push(dest);
                  //  arrDest.push(src);
                }
                else{
                    throw "edge already exists";
                }
            }
            else{
                throw "the destination vertex does not exist";
            }
        }
        else{
            throw "the source vertex does not exist";
        }
    }

    deleteVertex(vertex){
        if(this.adjList.has(vertex)){
            let arr = this.adjList.get(vertex);
            for(let entry of arr){
                if(this.adjList.has(entry)){
                    let arr = this.adjList.get(entry);
                    let index = arr.indexOf(vertex);
                    arr.splice(index,1);
                }
            }
            this.adjList.delete(vertex);

        }
        else{
            throw "vertex does not exist";
        }
    }
    
    deleteEdge(src,dest){
        if(this.adjList.has(src)){
            if(this.adjList.has(dest)){
                let srcArr = this.adjList.get(src);
               // let destArr = this.adjList.get(dest);
                if(srcArr.includes(dest)){
                    let srcInd = destArr.indexOf(src);
                  //  let destInd = srcArr.indexOf(dest);
                    srcArr.splice(destInd,1);
                    //destArr.splice(srcInd,1);
                }
                else{
                    throw "no such edge between source and destination vertices";
                }
            }
            else{
                throw "Destination vertext does not exist";
            }
        }
        else{
            throw "Source vertex does not exist";
        }
    }

}
/*
let graph = new Graph();
let v1 = new Vertex("B");
let v2 = new Vertex("E");
let v3= new Vertex("C");
let v4 = new Vertex("A");
let v5 = new Vertex("D");

graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
graph.addVertex(v4);
graph.addVertex(v5);

graph.addEdge(v1,v2);
graph.addEdge(v1,v3);
graph.addEdge(v2,v3);
graph.addEdge(v2,v4);
graph.addEdge(v4,v3);
graph.addEdge(v4,v5);
graph.addEdge(v3,v5);
*/

//bfs.bfs(graph,v1);
//bfs.findShortestPath(graph,v1,v5);
//dfs(graph,v1);
//console.log(graph.adjList);
//topSort(graph);

let gr = new Graph();

let p = new Vertex("P");
let o = new Vertex("O");
let s = new Vertex("S");
let r = new Vertex("R");
let u = new Vertex("U");
let t = new Vertex("T");
let y = new Vertex("Y");
let v = new Vertex("v");
let z = new Vertex("Z");
let w = new Vertex("W");

gr.addVertex(p);
gr.addVertex(o);
gr.addVertex(s);
gr.addVertex(r);
gr.addVertex(u);
gr.addVertex(t);
gr.addVertex(y);
gr.addVertex(v);
gr.addVertex(z);
gr.addVertex(w);

gr.addEdge(p,o);
gr.addEdge(p,s);
gr.addEdge(p,z);
gr.addEdge(o,r);
gr.addEdge(r,u);
gr.addEdge(u,t);
gr.addEdge(r,y);
gr.addEdge(y,v);
gr.addEdge(o,v);
gr.addEdge(o,s);
gr.addEdge(s,r);
gr.addEdge(v,w);
var src = p;
var dest = v;
var path = 0;
var bool = false;
var set = new Set();
var time =0;

//recDfs(gr);
//console.log(path);
//console.log(set);

var vA = new Vertex('a');
var vB = new Vertex('b');
var vC = new Vertex('c');

var graphForCycle = new Graph();
graphForCycle.addVertex(vA);
graphForCycle.addVertex(vB);
graphForCycle.addVertex(vC);

graphForCycle.addEdge(vA,vB);
graphForCycle.addEdge(vB,vC);

//console.log(checkCycle(gr));

//the following recDFS is a modification of the main dfs algo to 
//find the number of paths from a src to dest
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
    if(u.vertex == dest.vertex){
        u.color = 0;
    }
    if(u.vertex == dest.vertex || set.has(u.vertex)){
        path = path+1;
        bool=true;
        return bool;

    }else{
        bool= false;
    }
    for(let v of graph.adjList.get(u)){
        if(v.color == 0){
        //    v.pred = u;
           bool= DFS(graph,v);
           if(bool){
               set.add(u.vertex);
           }
        }
    }
    //finishing time that is v.f refers to the time when the node is discovered again but all its out edges are discovered
    time = time+1;
    u.f = time;
    return bool;
}
