// the following locates the form field element on the DOM and inserts all of the form elements
let entryFormElement = document.querySelector("#entryForm")

let entryForm = `<fieldset>
<label for="journalDate">Date of entry</label>
<input type="date" name="journalDate" id="journalDate">
</fieldset>
<fieldset>
<label for="conceptsCovered">Concepts covered</label>
<textarea name="conceptsCovered" id="conceptsCovered" placeholder="What did you learn?" maxlength="50"></textarea>
</fieldset>
<fieldset>
<label for="journalEntry">Journal Entry</label>
<textarea name="journalEntry" id="journalEntry" placeholder="What did you do today?" rows="4"></textarea>
</fieldset>
<fieldset>
<label for="moodForDay">Mood for the day</label>
<select id="moodForDay" name="moodForDay">
    <option value="happy">Happy</option>
    <option value="excited">Excited</option>
    <option value="frustrated">Frustrated</option>
    <option value="sad">Sad</option>
    <option value="angry">Angry</option>
</select>
</fieldset>
<button id="submit-journal" value="Record Journal Entry">Record Journal Entry</button>`

entryFormElement.innerHTML = entryForm





