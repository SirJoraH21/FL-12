const structure = [{
    'folder': true,
    'title': 'Films',
    'children': [{
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [{
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [{
      'folder': true,
      'title': 'EPAM Homework answers',
      'children': null
    }]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function generateFileTree(structure, node) {
  const ul = document.createElement('ul');
  ul.style.listStyleType = 'none';

  for (let item of structure) {
    const li = document.createElement('li'),
      div = document.createElement('div'),
      icon = document.createElement('i'),
      span = document.createElement('span');

    icon.classList.add('material-icons');
    div.appendChild(icon);
    div.appendChild(span);
    span.innerText = item.title;
    li.appendChild(div);
    ul.appendChild(li);
    if (item.folder) {
      icon.innerText = 'folder';
      div.classList.toggle('folder');
      div.onclick = () => {
        if (icon.innerText === 'folder') {
          icon.innerText = 'folder_open';
        } else {
          icon.innerText = 'folder';
        }
        li.querySelector('.closed').classList.toggle('open');
      }
      if (item.children) {
        generateFileTree(item.children, li);
      } else {
        const emptyMark = document.createElement('span');
        emptyMark.classList.add('empty_folder', 'closed');
        emptyMark.innerText = 'Folder is empty';
        li.appendChild(emptyMark);
      }
    } else {
      div.classList.toggle('file');
      icon.innerText = 'insert_drive_file';
      icon.classList.add('file_image');
    }
  }
  node.appendChild(ul);
  if (ul.parentElement !== rootNode) {
    ul.classList.toggle('closed')
  }
}
generateFileTree(structure, rootNode);