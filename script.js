document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    
    const displayDiv = document.getElementById('displayInfo');

    displayDiv.innerHTML = `<p>Username: ${username}</p><p>Age: ${age}</p>`;
   
  });
  
  