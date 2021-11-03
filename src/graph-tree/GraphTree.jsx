import "./GraphTree.css"
import Tree from 'react-d3-tree';

function GraphTree() {
    const orgChart = [
      {
        name: 'Dane',
        children: [
          {
            name: 'Polityka',
            attributes: {
              department: 'Polska',
            },
            children: [
              {
                name: 'Prawica',
                attributes: {
                  department: 'PIS',
                },
                children: [
                  {
                    name: 'Kaczyński',
                  },
                ],
              },
              {
                name: 'Lewica',
                attributes: {
                  department: 'PO',
                },
                children: [
                  {
                    name: 'Tusk',
                  },
                ],
              },
            ],
          },
            {
            name: 'Sport',
            attributes: {
              department: 'Polska',
            },
            children: [
              {
                name: 'Liga',
                attributes: {
                  department: 'Ekstraklasa',
                },
                children: [
                  {
                    name: 'Legia',
                  },
                  {
                    name: 'Lech',
                  },
                ],
              },
              {
                name: 'Reprezentacja',
                attributes: {
                  department: 'Euro',
                },
                children: [
                  {
                    name: 'Lewandowski',
                  },
                ],
              },
            ],
          },
        ],
      },{
        name: 'Sport',
        children: [
          {
            name: 'Piłka nożna',
            attributes: {
              department: 'Production',
            },
            children: [
              {
                name: 'Legia',
                attributes: {
                  department: 'Fabrication',
                },
                children: [
                  {
                    name: 'Alkohol',
                  },
                ],
              },
              {
                name: 'Lech',
                attributes: {
                  department: 'Assembly',
                },
                children: [
                  {
                    name: 'Mistrz Polski',
                  },
                ],
              },
            ],
          },
        ],
      }
    ]

    return (
        <div id="treeWrapper" style={{ width: '95vw', height: '90vh' }}>
      <Tree data={orgChart} />
    </div>
    );
}
  export default GraphTree;