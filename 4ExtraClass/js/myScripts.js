const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function myFunction() {
  Swal.fire("Good job!", "Date: " + Date.now(), "info");
}

function timer() {
  var now = new Date();
  var date = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var secs = now.getSeconds();
  var time;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + mins;
  if (hours < 10) hours = "0" + mins;
  if (hours >= 12) time = "PM";
  else time = "AM";

  let result = `${date} ${hours}:${mins}:${secs} ${time}`;
  document.getElementById("dateTime").innerText = result;
  setTimeout(timer, 1000);
}

timer();
