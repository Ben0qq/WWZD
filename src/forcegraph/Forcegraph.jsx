import { ForceGraph2D } from "react-force-graph";

function Forcegraph() {
    const orgChart =
    {
        "nodes": [
            {
                "id": "test0",
                "name": "dzisiaj"
            },
            {
                "id": "test1",
                "name": "Polityka",
                "value": "Polska"
            },
            {
                "id": "test2",
                "name": "Prawica",
                "value": "Pis"
            },
            {
                "id": "test3",
                "name": "Kaczyński"
            },
            {
                "id": "test4",
                "name": "Lewica",
                "value": "PO"
            },
            {
                "id": "test5",
                "name": "Tusk"
            },
            {
                "id": "test6",
                "name": "Lewandowskiskiski",
                "value": "Polskagurom"
            },
            {
                "id": "test7",
                "name": "Sport",
                "value": "Polska"
            },
            {
                "id": "test8",
                "name": "Liga",
                "value": "Ekstraklasa"
            },
            {
                "id": "test9",
                "name": "Reprezentacja",
                "value": "Euro"
            },
            {
                "id": "test10",
                "name": "Legia"
            },
            {
                "id": "test11",
                "name": "Lech"
            }
        ],
        "links": [
            {
                "source": "test0",
                "target": "test1"
            },
            {
                "source": "test0",
                "target": "test7"
            },
            {
                "source": "test1",
                "target": "test2"
            },
            {
                "source": "test2",
                "target": "test3"
            },
            {
                "source": "test1",
                "target": "test4"
            },
            {
                "source": "test4",
                "target": "test5"
            },
            {
                "source": "test7",
                "target": "test8"
            },
            {
                "source": "test8",
                "target": "test10"
            },
            {
                "source": "test8",
                "target": "test11"
            },
            {
                "source": "test7",
                "target": "test9"
            },
            {
                "source": "test9",
                "target": "test6"
            },

        ]
    }

    return (
        <div id="forceWrapper" style={{ width: '95vw', height: '90vh' }}>
            <ForceGraph2D graphData={orgChart} linkDirectionalParticles={2}
            nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.name;
                const fontSize = 12/globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                const textWidth = ctx.measureText(label).width;
                const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
    
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
    
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'black';
                ctx.fillText(label, node.x, node.y);
    
                node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
              }}
              nodePointerAreaPaint={(node, color, ctx) => {
                ctx.fillStyle = color;
                const bckgDimensions = node.__bckgDimensions;
                bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
              }}/>
        </div>
    );
}
export default Forcegraph;