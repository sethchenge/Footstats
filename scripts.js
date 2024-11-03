// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const getPredictionsBtn = document.getElementById('getPredictionsBtn');
  const viewMoreBtn = document.getElementById('viewMoreBtn');

  getPredictionsBtn.addEventListener('click', () => {
      alert('Loading Predictions...');
      // Add code to fetch and display predictions here
  });

  viewMoreBtn.addEventListener('click', () => {
      alert('Loading More Predictions...');
      // Add code to load more predictions here
  });

  // Additional interactivity for other elements can be added here
});

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const getPredictionsBtn = document.getElementById('getPredictionsBtn');
  const viewMoreBtn = document.getElementById('viewMoreBtn');

  getPredictionsBtn.addEventListener('click', () => {
      alert('Loading Predictions...');
      // Add code to fetch and display predictions here
  });

  viewMoreBtn.addEventListener('click', () => {
      alert('Loading More Predictions...');
      // Add code to load more predictions here
  });

  // Example chart using Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          link.classList.add('hover-active');
      });

      link.addEventListener('mouseleave', () => {
          link.classList.remove('hover-active');
      });
  });

  // Example chart using Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});

// Function to toggle additional content
function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
  } else {
      content.style.display = 'none';
  }
}
// scripts.js
function sendEmail() {
  window.location.href = 'chengeseth25@gmail.com?subject=Football Predictions Inquiry';
}

document.addEventListener('DOMContentLoaded', () => {
  const mailtoBtn = document.querySelector('.mailto-btn');
  mailtoBtn.addEventListener('click', sendEmail);
});