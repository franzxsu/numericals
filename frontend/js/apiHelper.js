// sample call bisection_method(lambda x: x**2 - 4, a=-2, b=2)

// sample template method also just used to test shit
export function getAns(nums, operation){
    fetch('http://127.0.0.1:5000/compute', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        numbers: nums,
        method: operation
    }),
    })
    .then(response => response.json())
    .then(data => console.log('Result:', data.result))
    .catch((error) => console.error('Error:', error));
}

export function bisect(){
    fetch('http://127.0.0.1:5000/bisection', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        function: "x**2 - 4",
        lb: -2,
        ub: 2
    }),
    })
    .then(response => response.json())
    .then(data => console.log('Result:', data.result))
    .catch((error) => console.error('Error:', error));
}