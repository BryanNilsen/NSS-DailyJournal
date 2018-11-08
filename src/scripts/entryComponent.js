// the following targets the article the new journal entry will be appended to
const entryList = document.querySelector('#entryLog')

// the following function creates the html structure for the new entry
// journalEntry argument references the object properties in journalEntries array of objects
const makeJournalEntryComponent = (journalEntry) => {
    return`
    <div class="journal_entry">
    <h3>Entry Date: ${journalEntry.date}</h3>
    <h2>${journalEntry.concept}</h2>
    <p><strong>Notes: </strong>${journalEntry.entry}</p>
    <p><strong>Mood: </strong>${journalEntry.mood}</p>
    `
}