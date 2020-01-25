class Vertex{
    constructor(vertex){
        this.vertex = vertex;

        //color is used to help with BFS algorithm
        this.color= "WHITE";
        //distance of the node from a source node
        this.dist=0;
        //to keep track of predecessor elements in BFS tree
        this.pred = null;
    }
}

module.exports = Vertex;