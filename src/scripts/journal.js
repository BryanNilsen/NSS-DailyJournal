// use the API object and grab the data

API.getJournalEntries().then(entries => makeJournalEntry(entries));
    // the following will run the makeJournalEntry function based on the parsed entries which now translate to the makeJournalEntries