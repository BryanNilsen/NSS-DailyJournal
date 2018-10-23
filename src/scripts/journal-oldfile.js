// Journal Data
const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Happy"
    },
    {
        date: "07/26/2018",
        concept: "Array methods",
        entry: "Seems like I forgot everything I learned.",
        mood: "Sad"
    },
    {
        date: "07/28/2018",
        concept: "Manipulating the DOM",
        entry: "Couldn't get anything to work right.",
        mood: "Angry"
    }
]


const entryLog = document.querySelector('.entryLog');

// The following sets the page to read the current date and time (accounting for time zones)
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


// The following variables target the form inputs
let journalDateEl = document.getElementById("journalDate")
let journalConceptsEl = document.getElementById("conceptsCovered")
let journalEntryEl = document.getElementById("journalEntry")
let journalMoodForDay = document.getElementById("moodForDay")
// The following automatically sets the current date in the Journal Date input field
journalDateEl.valueAsDate = new Date();


// The following code runs when the submit button is clicked
function submitJournal() {
    event.preventDefault();
    let moodForDaySelected = journalMoodForDay.options[journalMoodForDay.selectedIndex].value;
    // create a new object within the journalEntries array 
    let newObject={date: journalDateEl.value, concept: journalConceptsEl.value, entry: journalEntryEl.value, mood: moodForDaySelected}
    journalEntries.push(newObject)
    console.log(journalEntries)
}



/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

// ZAC's solution
// const makeJournalEntryComponent = (date, concept, entry, mood) => 
//     `<section>
//         <h2>${date}: ${concept}</h2>
//         <p>${entry}</p>
//         <p>Mood for the day: ${mood}</p>
//     </section>`


/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/

// for(entry of journalEntries){
//     let entryComponent;
//     entryComponent = makeJournalEntryComponent(entry.date, entry.concept, entry.entry, entry.mood);
//     entryLog.innerHTML += entryComponent
// }


// Invoke the render function
// renderJournalEntries(journalEntries)




/* NOTES: I'm able to take the entries from the form and console log the values
1. I need to be able to push those values to a new journalEntries object within the array
journalEntries will take arguments: (name, concept, entry, mood) >> these will be grabbed from form






2. I need to create a function that cycles through the journal entries and posts them to the page >> renderJournalEntries
*/

// The following sorts the journal entries from newest to oldest (to sort oldest to newest, swap dateB and dateA in the return statement)
let sortedJournalEntries = journalEntries.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateB - dateA;
});

// The following populates the page with the sorted journal entries stored at the top of this file
const articleEntryLog = document.getElementById("entryLog")

// function addNew() {
//     let newEntry = document.createElement('section');
//     newEntry.className = "journal_entry"    
//     newEntry.innerHTML =
//         `<h3>${journalEntries.date}: ${journalEntries.concept}</h3>
//         <p>${journalEntries.entry}</p>
//         <p><strong>Mood:</strong> ${journalEntries.mood}</p>`
//     articleEntryLog.appendChild(newEntry)
// }


sortedJournalEntries.forEach((entry) => {
    let newEntry = document.createElement('section');
    newEntry.className = "journal_entry"    
    newEntry.innerHTML =
        `<h3>${entry.date}: ${entry.concept}</h3>
        <p>${entry.entry}</p>
        <p><strong>Mood:</strong> ${entry.mood}</p>`
    articleEntryLog.appendChild(newEntry)
})

