const nameLinks = {
    "zoe gordon": ["zoe's mum", "zoe's dad"],
    "axel la pira": ["axel's mum", "axel's dad"],
    "kailin guo": ["kailin's mother", "kailin's father"]
    // Add more names and their links here if needed
};

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const output = document.getElementById('output');
    
    if (nameLinks[nameInput]) {
        output.textContent = `parents: ${nameLinks[nameInput].join(', ')}`;
    } else {
        output.textContent = 'You have no college parents linked! Either you have not been assigned one yet, or chek the spelling.';
    }
});
