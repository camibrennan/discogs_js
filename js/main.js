const labelsarray = []

function count(item, list) {
    return list.filter(x => x === item).length
}
function uniquify(list) {
    return [...new Set(list)]
}

function organize(data) {
    // data is a JavaScript Object
console.log("Got the data!");
    console.log(data.releases);

    data.releases.forEach(d => {
        // d is a JavaScript Object
        // of a Release on Discogs
        console.log('title', d.basic_information.title)
        console.log('id', d.id)
        const labels = d.basic_information.labels.map(l => {
            return l.name
        })

        labelsarray.push(...labels)
        console.log('label', labels)
    })


    console.log('labels array', labelsarray.sort())
    
    let uniqueLabels = uniquify(labelsarray)
    let labelCounts = {}
    
    uniqueLabels.forEach((label) => {
        labelCounts[label] = count(label, labelsarray)
    })
    
    console.log("labelCounts:", labelCounts)
    console.log("labelCounts 4AD:", labelCounts['4AD'])
    console.log("labelCounts Barsuk:", labelCounts['Barsuk Records'])
    console.log("labelCounts Merge:", labelCounts['Merge Records'])
    console.log("labelCounts Dischord:", labelCounts['Dischord Records'])

}
// TODO: update pagination -- for more results per page

//{"pagination": {"page": 1, "pages": 9, "per_page": 50, 
//"items": 401, "urls": {"last": "https://api.discogs.com/users/cameliabrennan/collection/folders/0/releases?page=9&per_page=50", 
//"next": "https://api.discogs.com/users/cameliabrennan/collection/folders/0/releases?page=2&per_page=50"}},

function fetchdiscogs(){
    fetch("https://api.discogs.com/users/cameliabrennan/collection/folders/0/releases")
    .then(response => response.json()) // string -> Object
    .then(data => {
        console.log(data)
        let nexturl = data.pagination.urls.next
        fetch (nexturl)
            .then(response => response.json()) // string -> Object
            .then(data => {
                organize(data)
            });
      organize(data)  
    });
}

fetchdiscogs();

//         function barsukList() {
//             barsukCount = labelCounts['Barsuk Records'] 
//             console.log('isthisworking')
//             alert(barsukCount); 
        
//         }
        
     
// function mergeList() {
//     console.log('isthisworking')
//     alert('Merge Records: 98 records'); 

// }

// function beggarsList() {
//     console.log('isthisworking')
//     alert('Beggars: 24 records'); 

// }


// function dominoList() {
//     console.log('isthisworking')
//     alert('Domino Recording Co: 46'); 

// }

// function jadetreeList() {
//     console.log('isthisworking')
//     alert('Jade Tree: 13 records'); 

// }

// function secretlyList() {
//     console.log('isthisworking')
//     alert('Secretly Canadian Label Group: 8'); 

// }

// function saddlecreekList() {
//     console.log('isthisworking')
//     alert('Saddle Creek: 23 records'); 

// }












// Current token: oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv

// curl "https://api.discogs.com/database/search?q=Nirvana&token=oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv"

// curl "https://api.discogs.com/users/cameliabrennan/collection/folders&token=oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv"

// curl https://api.discogs.com/users/cameliabrennan/collection/folders/0/releases



// fetch("https://api.discogs.com/database/search?q=Nirvana&page=12&per_page=1", {
//   headers: {
//     Authorization: 'Discogs token=oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv'
//   }
// }).then(res => res.json()).then(console.log)