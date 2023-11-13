// FLASK IS AT PORT 5000 !!!!!!!!!!!!!!!


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
/**
 * function: "x**2 - 4",
        lb: -2,
        ub: 2
 */

export async function bisect(func, lower, upper, error) {
    try {
        const response = await fetch('http://127.0.0.1:5000/bisection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                function: func,
                lb: lower,
                ub: upper,
                error: error
            }),
        });
        const data = await response.json();
        return data.result;
    } catch (error_1) {
        console.error('Error:', error_1);
        throw error_1;
    }
}

export async function newtonraphson(func, x, error) {
    try {
        const response = await fetch('http://127.0.0.1:5000/newtonraphson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                function: func,
                x: x,
                error: error
            }),
        });
        const data = await response.json();
        return data.result;
    } catch (error_1) {
        console.error('Error:', error_1);
        throw error_1;
    }
}