const entryLog = document.querySelector('.entryLog');
// The following sets the page to read the current date and time (accounting for time zones)
Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});

// The following variables target the form inputs
let journalDateEl = document.getElementById("journalDate")
let journalConceptsEl = document.getElementById("conceptsCovered")
let journalEntryEl = document.getElementById("journalEntry")
let journalMoodForDay = document.getElementById("moodForDay")
// The following automatically sets the current date in the Journal Date input field
journalDateEl.valueAsDate = new Date();

// the following function loops through the journalEntries array and the entry argument references the journalEntry from the makeJournalEntryComponent function
// made into a function to allow execution after parsedEntries were fetched
function makeJournalEntry(journalEntries) {
    journalEntries.forEach((entry) => {
        let newEntry = document.createElement('div');
        let entryContents = makeJournalEntryComponent(entry);
        newEntry.innerHTML = entryContents;
        entryList.appendChild(newEntry);
    })
}

// this grabs the form input and sends it to the API-database
function submitJournal() {
    let moodForDaySelected = journalMoodForDay.options[journalMoodForDay.selectedIndex].value;
    // create a new object within the journalEntries array
    let newObject = { date: journalDateEl.value, concept: journalConceptsEl.value, entry: journalEntryEl.value, mood: moodForDaySelected }
    API.saveJournalEntry(newObject)
        .then(() => populatePage());
    console.log(newObject)
}


const formValidation = () => {
// tests for empty strings or invalid characters
    if (journalConceptsEl.value === null || journalConceptsEl.value === "") {
        alert("Please enter the concept(s) you learned.")
    } else if (journalEntryEl.value === "") {
        alert("Please complete the journal entry for today.")
    } else if(!journalConceptsEl.value.match(/^[a-zA-Z\s(){}:;'"]+$/)){
        alert("Please use only letters, numbers or (), {}, :, and ;")
    } else if (journalConceptsEl.value === "") {
            alert("You must enter a concept")
    } else {
        entryList.innerHTML = "";
        submitJournal()
    }
}



// validating Concepts Covered input to return alert if user types in more than 50 characters
$( "#conceptsCovered" ).on('input', function() {
    if ($(this).val().length>=50) {
        alert('Please limit your entry to 50 characters');
    }
});


// profanity alert
const checkProfanity = () => {
    const journalEntry = $("#journalEntry").val().toLowerCase()
    const conceptsCovered = $("#conceptsCovered").val().toLowerCase()
    const entryRegex = /shit|ass|fuck/
    if (entryRegex.test(journalEntry) === true) {
        alert("No profanity, please.")
        journalEntryEl.value = ""
    }
    else if (entryRegex.test(conceptsCovered) === true) {
        alert("No profanity, please.")
        journalConceptsEl.value = ""
    }
 }


//  the following adds the profanity filter to the journal entry text input
// document.getElementById('journalEntry').addEventListener('keyup', checkProfanity)
$("#journalEntry").keyup(checkProfanity)
$("#conceptsCovered").keyup(checkProfanity)


// use the API object and grab the data
const populatePage = () => {
    // the following will run the makeJournalEntry function based on the parsed entries which now translate to the makeJournalEntries
    API.getJournalEntries().then(entries => makeJournalEntry(entries))
}

// EVENT LISTENERS
// let entrySubmitBtn = document.querySelector("#submit-journal")
// entrySubmitBtn.addEventListener("click", formValidation)
$("#submit-journal").click(formValidation)