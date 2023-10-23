// JavaScript to save notes to a text file with creator and timestamp and clear the text box
const saveButton = document.getElementById('save-button');
const noteText = document.getElementById('note-text');

saveButton.addEventListener('click', function() {
    const note = noteText.value;
    const creator = "boi"; // Replace with the actual username
    const timestamp = new Date().toLocaleString();
    const noteWithMeta = `This note was created in ChadBrower by ${creator} on ${timestamp}\n\n${note}`;

    const blob = new Blob([noteWithMeta], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'ChadBrowser.txt';

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);

    // Clear the text box after saving
    noteText.value = "";
});


