// the following targets the article the new journal entry will be appended to 
const entryList = document.querySelector('#entryLog')
// the following function creates the html structure for the new entry
// journalEntry argument references the object properties in journalEntries array of objects
const makeJournalEntryComponent = (journalEntry) => {
    return`
    <h2>${journalEntry.date}: ${journalEntry.concept}</h2>
    <p>${journalEntry.entry}</p>
    <p>Mood for the day: ${journalEntry.mood}</p>
    `
}