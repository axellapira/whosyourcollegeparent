const nameLinks = {
    "Alice": ["Bob", "Charlie"],
    "Dave": ["Eve", "Frank"],
    "Grace": ["Heidi", "Ivan"]
    // Add more names and their links here
};

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('nameInput').value.trim();
    const output = document.getElementById('output');
    
    if (nameLinks[nameInput]) {
        output.textContent = `Linked Names: ${nameLinks[nameInput].join(', ')}`;
    } else {
        output.textContent = 'No linked names found for this input.';
    }
});
