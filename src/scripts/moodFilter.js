let moodFilterButtons = document.querySelectorAll("input[name='mood']")

moodFilterButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    API.getJournalEntries().then(allData => {
      let filteredData = allData.filter(function (entry) {
        return entry.mood == e.target.value
      })
      entryLog.innerHTML = "";
      makeJournalEntry(filteredData)
    })
  }
  )
})
