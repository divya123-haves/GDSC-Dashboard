

// graph1
const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Net Profit',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
    }
});

// graph2
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bubble',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Average Revenue',
            data: [],
            backgroundColor: 'rgba(255, 141, 28, 0.6)',
            borderColor: 'rgba(255, 141, 28, 1)',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Index',
                },
                beginAtZero: true,
            },
            y: {
                title: {
                    display: true,
                    text: 'Random Number',
                },
                beginAtZero: true,
            }
        }
    }
    
});

// graph3
const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Negative', 'Positive', 'Neutral'],
        datasets: [{
            label: 'Feedbacks',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

// graph 4
const ctx4 = document.getElementById('myChart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'radar',
    data: {
        labels: ['Americano', 'Cappuccino', 'Espresso', 'Cortado', 'Affogato'],
        datasets: [{
            label: 'Coffee Rate',
            data: [],
            backgroundColor: 'rgb(150, 160, 20,0.2)',
            borderColor: 'rgb(150, 160, 20,1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

// graph 5
const ctx5 = document.getElementById('myChart5').getContext('2d');
const myChart5 = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ['Negative', 'Positive', 'Neutral'],
        datasets: [{
            label: 'Customer Loyalty Cards',
            // data: [10, 15, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

// graph 6
const ctx6 = document.getElementById('myChart6').getContext('2d');
const myChart6 = new Chart(ctx6, {
    type: 'polarArea',
    data: {
        labels: ['Coffee', 'Infrastructure', 'Salary', 'Tools', 'Revenue'],
        datasets: [{
            label: 'Operating Expenses',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

//chart 7
const ctx7 = document.getElementById('myChart7').getContext('2d');
const myChart7 = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['2024','2023', '2022', '2021', '2020'],
        datasets: [{
            label: 'Employee Retention Rate',
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(201, 203, 207, 1)',
               
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

//chart 8
const ctx8 = document.getElementById('myChart8').getContext('2d');
const myChart8 = new Chart(ctx8, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Operational Cost',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',            
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',      
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

const socket = io('https://data.gdscnsut.com/');

function generateRandomData(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

socket.on('random_number', (data) => {
    
    myChart1.data.datasets[0].data = generateRandomData(6);
    myChart1.update();

    const bubbleData = Array.from({ length: 30 }, () => ({
        x: Math.random() * 10,   
        y: Math.floor(Math.random() * 50), 
        r: 5                        
    }));
    
    myChart2.data.datasets[0].data = bubbleData;
    myChart2.update();

    myChart3.data.datasets[0].data = generateRandomData(3);
    myChart3.update();

    myChart4.data.datasets[0].data = generateRandomData(5);
    myChart4.update();

    myChart5.data.datasets[0].data = generateRandomData(3);
    myChart5.update();

    myChart6.data.datasets[0].data = generateRandomData(5);
    myChart6.update();

    myChart7.data.datasets[0].data = generateRandomData(5);
    myChart7.update();

    myChart8.data.datasets[0].data = bubbleData;
    myChart8.update();
});


