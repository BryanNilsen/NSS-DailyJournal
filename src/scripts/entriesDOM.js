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