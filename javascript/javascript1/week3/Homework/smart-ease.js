console.log("=========Smart-Ease=========");

const notes = [];

function saveNote(content, id) {
    if (typeof content === "string" && typeof id === "number"){
        notes.push({content, id });
        console.log("Note saved!")
    } else {
        console.log("Please insert valid text and a numeric ID.");
    }   
}


saveNote(12312, "1");
saveNote("Do laundry", 2);
saveNote("Pay bills", 3);


function getNote(id) {
    for (let i=0; i<notes.length; i++){
        if (notes[i].id === id){
            return notes[i].content
        }
    }
    return "Note not found";
}


console.log("The task is:", getNote(2));
console.log("The task is:", getNote(3));
console.log("The task is:", getNote(5));



function logOutNotesFormatted() {
    for (let i=0; i<notes.length; i++){
        console.log("The note with id:", notes[i].id, "has the following note text:", notes[i].content)
    }
}

logOutNotesFormatted();