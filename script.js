function fetchData() {
    let country = document.getElementById('countryName').value; // Use .value to get the input value
    
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then(response => response.json()) // Ensure you are invoking .json()
      .then(data => displayCountrydata(data[0])) // Use data[0] to access the first country in the response
      .catch(error => alert('Error fetching details:', error));
  }
  
  function displayCountrydata(country) {
    const country_card1 = document.getElementById('country_card1');
    const country_card2 =document.getElementById('country_card2')
    const country_data1 = `
      <img src="${country.flags.png}" class="card-img-top rounded mt-4" alt="Flag">
      <h2>${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital[0]}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    `;
    const country_data2 = `
    <img src="${country.coatOfArms.svg}" class="card-img-top rounded mt-4" style="width:200px; height:200px " alt="Flag">
      <h2>${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital[0]}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> ${Object.values(country.languages).join(', ')}</p>
      <p><strong>Currency:</strong> ${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol})</p>
      <p><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>
      <p><strong>Timezones:</strong> ${country.timezones.join(', ')}</p>`
  
    country_card1.innerHTML = country_data1;
    country_card1.style.display = "block";

    country_card2.innerHTML = country_data2;
    country_card2.style.display = "block";
  }
  