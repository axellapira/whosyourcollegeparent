const nameLinks = {
    "zoe gordon": ["zoe's mum", "zoe's dad"],
    "axel la pira": ["ellie", "luke"],
    "kailin guo": ["kailin's mother", "kailin's father"]
    // Add more names and their links here if needed
};

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const output = document.getElementById('output');
    
    if (nameLinks[nameInput]) {
        output.textContent = `Linked Names: ${nameLinks[nameInput].join(', ')}`;
    } else {
        output.textContent = 'No linked names found for this input.';
    }
});
