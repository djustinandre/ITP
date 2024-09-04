const displayUserData = async () => {
  const userContainer = document.querySelector('#userContainer');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Check if not successful
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: HTTP Error ${response.status}`);
    }

    //Extract JSON from response
    const data = await response.json();

    let html = '';

    data.forEach(function (user) {
      html += `
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${user.name}</h5>
                  <h6 class="card-subtitle">Email: ${user.email}</h6>
                  <p class="card-text">Username: ${user.username}</p>
                  <a href="http://${user.website}" class="card-link">Website</a>
                </div>
              </div>
            </div>
        `;
    });

    // Event listener for the "Fetch User Data" button
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', displayUserData);

    userContainer.innerHTML = html;
  } catch (error) {
    userContainer.innerHTML = 'An error occured while fetching the data.';
    console.error(error);
  }
};
