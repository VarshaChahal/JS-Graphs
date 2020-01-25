let Vertex = require('./Vertex');
let bfs = require('./bfs');

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
                let arrDest = this.adjList.get(dest);
                if(!arrSrc.includes(dest) && !arrDest.includes(src)){
                    arrSrc.push(dest);
                    arrDest.push(src);
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
                let destArr = this.adjList.get(dest);
                if(srcArr.includes(dest) && destArr.includes(src)){
                    let srcInd = destArr.indexOf(src);
                    let destInd = srcArr.indexOf(dest);
                    srcArr.splice(destInd,1);
                    destArr.splice(srcInd,1);
                }
                else{
                    throw "no such edge between source and destination vertices";
                }
            }
            else{
                throw "no such edge between source and destination vertices";
            }
        }
    }

}
let graph = new Graph();
let v1 = new Vertex(2);
let v2 = new Vertex(4);
let v3= new Vertex(6);
let v4 = new Vertex(7);
let v5 = new Vertex(8);

graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
graph.addVertex(v4);
graph.addVertex(v5);

graph.addEdge(v1,v2);
graph.addEdge(v3,v4);
graph.addEdge(v2,v3);
graph.addEdge(v2,v4);
graph.addEdge(v4,v5);
graph.addEdge(v1,v5);
/*graph.addVertex(4);
graph.addVertex(6);
graph.addVertex(7);
graph.addEdge(2,4);
graph.addEdge(4,6);
graph.addEdge(4,7);
graph.addEdge(6,7);

//graph.deleteVertex(4);
graph.deleteEdge(4,7);
*/

//bfs.bfs(graph,v1);
bfs.findShortestPath(graph,v1,v5);
console.log(graph.adjList);

