// Listen enter
document.getElementById('flavorsInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        calculateFlavors();
    }
});

document.getElementById('submitButton').addEventListener('click', calculateFlavors);

// Calculate flavors
function calculateFlavors() {
    const input = document.getElementById('flavorsInput').value;
    const flavors = input.split(',').map(flavor => flavor.trim().toLowerCase());
    const flavorCounts = {};

    flavors.forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });

    let resultHTML = '<h2>Froyo Flavor Totals:</h2><table><tr><th>Flavor</th><th>Servings</th></tr>';
    for (const [flavor, count] of Object.entries(flavorCounts)) {
        resultHTML += `<tr><td>${flavor.charAt(0).toUpperCase() + flavor.slice(1)}</td><td>${count}</td></tr>`;
    }
    resultHTML += '</table>';

    document.getElementById('result').innerHTML = resultHTML;
}

// Create Snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄️';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);