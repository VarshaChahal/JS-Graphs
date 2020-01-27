class Vertex{
    constructor(vertex){
        this.vertex = vertex;

        //color is used to help with BFS algorithm
        this.color= 0;
        //distance of the node from a source node
        this.dist=0;
        //to keep track of predecessor elements in BFS tree
        this.pred = null;

        //time when the vertex is discovered
        this.d=0;
        //time when vertex is finished being discovered
        this.f=0;
    }
}

module.exports = Vertex;