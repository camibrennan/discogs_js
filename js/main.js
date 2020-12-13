const labelsarray = []

fetch("https://api.discogs.com/users/cameliabrennan/collection/folders/0/releases")
    .then(response => response.json()) // string -> Object
    .then(data => {
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
        // TODO: count all the labels, update pagination -- for more results per page, get list of records per label, connect # to bar chart 
        });


function mergeList() {
    console.log('isthisworking')
    alert('Merge Records: 98 records'); 

}

function beggarsList() {
    console.log('isthisworking')
    alert('Beggars: 24 records'); 

}

function barsukList() {
    console.log('isthisworking')
    alert('Barsuk: 8'); 

}

function dominoList() {
    console.log('isthisworking')
    alert('Domino Recording Co: 46'); 

}

function jadetreeList() {
    console.log('isthisworking')
    alert('Jade Tree: 13 records'); 

}

function secretlyList() {
    console.log('isthisworking')
    alert('Secretly Canadian Label Group: 8'); 

}

function saddlecreekList() {
    console.log('isthisworking')
    alert('Saddle Creek: 23 records'); 

}


// Current token: oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv

// curl "https://api.discogs.com/database/search?q=Nirvana&token=oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv"

// curl "https://api.discogs.com/users/cameliabrennan/collection/folders&token=oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv"

// curl https://api.discogs.com/users/cameliabrennan/collection/folders/0/releases



// fetch("https://api.discogs.com/database/search?q=Nirvana&page=12&per_page=1", {
//   headers: {
//     Authorization: 'Discogs token=oSilxsnwWSMNqmlSWLmLVCMvdpiftgoeAsUHzUPv'
//   }
// }).then(res => res.json()).then(console.log)