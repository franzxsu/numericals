fetch('http://127.0.0.1:5000/compute', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        numbers: [1, 2, 3, 4],
        method: 'sum'
    }),
})
.then(response => response.json())
.then(data => console.log('Result:', data.result))
.catch((error) => console.error('Error:', error));
