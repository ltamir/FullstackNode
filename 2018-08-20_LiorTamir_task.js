/**
 * 20/08/2018
 * Lior Tamir
 * NodeJS course
 * Ariel practical engineering
 * Sort json array by libraryID field descending
 */
var library = [ 
    {
        "title":  "The Road Ahead",
        "author": "Bill Gates",
        "libraryID": 1254
    },
    {
        "title": "Walter Isaacson",
        "author": "Steve Jobs",
        "libraryID": 4264
    },
    {
        "title": "Mockingjay: The Final Book of The Hunger Games",
        "author": "Suzanne Collins",
        "libraryID": 3245
    },
    {
        "title": "The Name of the Rose",
        "author": "Umberto Eco",
        "libraryID": 2245
    },
    {
        "title": "Fermat's Last Theorem",
        "author": "Simon Singh",
        "libraryID": 2345
    }];

    var tail = library.length-1;
    var head = 0;

    console.log("Before: ");
    library.forEach(function(book){console.log(book)});

  
    while(head < library.length){
        tail = library.length-1;
        while(head < tail && tail > 0){    
            if(library[head].libraryID < library[tail].libraryID){
                let book = library[head];
                library[head] = library[tail];
                library[tail] = book;
            }
            tail--;
        }
        head++;
    }

    console.log("\nAfter: ");
    library.forEach(function(book){console.log(book)});