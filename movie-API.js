//The MovieShop class contains the user details and some static properties
class MovieShop {
  constructor(username, password, email) {
    this.user = {
      username: username,
      password: password,
      email: email,
      id: email,
    };
  }

  static borrowingFee = 20;
  static lateFee = 5;

  static movies = [
    {
      movieTitle: "A Man Called God",
      movieDescription:
        "After the suspicious death of his parents, Choi Kang-ta is adopted and grows up in the US, eventually joining the President's secret service. He eventually goes back to Korea to learn more about his parent's death and to seek revenge.",
      genre: ["Action", "Romance"],
      year: 2010,
      id: 1,
    },
    {
      movieTitle: "Half Heaven",
      movieDescription:
        "A pastor sent to a deadly community to preach the gospel. He encounters a lot of challenges and overcomes it with the help of a prostitute.",
      genre: ["Action"],
      year: 2021,
      id: 2,
    },
    {
      movieTitle: "The Kitchen",
      movieDescription:
        "In a dystopian future London where all social housing has been eliminated, Izi and Benji fight to navigate the world as residents of The Kitchen, a community that refuses to abandon their home.",
      genre: ["Action"],
      year: 2022,
      id: 3,
    },
    {
      movieTitle: "A Weekend to Forget",
      movieDescription:
        "Seven friends reunite for a weekend getaway after years of being apart. However, things don't go as smoothly as they'd hoped, as old tensions and unresolved issues resurface.",
      genre: ["Action", "Romance"],
      year: 2023,
      id: 4,
    },
    {
      movieTitle: "Man on the Run",
      movieDescription:
        "Talks the true story of the 1MDB scandal, in which a high-flying businessman uses embezzled funds to cultivate connections with movie stars and politicians.",
      genre: ["Action"],
      year: 2024,
      id: 5,
    },
  ];
}

//User details variables are declared globally to avoid error due to variable scope
let username, password, email;

//The readline module is used to create interface for communicating with users
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//The user begins to interact with the API from here
console.log("Hello and welcome to De Fred's Film House");
readline.question("What Should we call you: ", (response) => {
  username = response;
  readline.question("What is your email address: ", (mail) => {
    email = mail;
    readline.question("password: ", (pass) => {
      password = pass;

      console.log("Movie List:");
      MovieShop.movies.forEach((item, index) => {
        let num = index + 1;
        console.log(`${num} ${item.movieTitle}`);
      });
      readline.question("Pick a number to continue: ", (reply) => {
        choiceProcess(reply);
      });
    });
  });
});

// This function handles the user's choice in the readline operation above
function choiceProcess(choice) {
  switch (choice) {
    case "1":
      console.log("A little intro:");
      console.log(MovieShop.movies[0].movieDescription);
      console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
      console.log(`Late Fee: $${MovieShop.lateFee}`);
      payment();
      break;

    case "2":
      console.log("A little intro:");
      console.log(MovieShop.movies[1].movieDescription);
      console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
      console.log(`Late Fee: $${MovieShop.lateFee}`);
      payment();
      break;

    case "3":
      console.log("A little intro:");
      console.log(MovieShop.movies[2].movieDescription);
      console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
      console.log(`Late Fee: $${MovieShop.lateFee}`);
      payment();
      break;

    case "4":
      console.log("A little intro:");
      console.log(MovieShop.movies[3].movieDescription);
      console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
      console.log(`Late Fee: $${MovieShop.lateFee}`);
      payment();
      break;

    case "5":
      console.log("A little intro:");
      console.log(MovieShop.movies[4].movieDescription);
      console.log(`Borrowing Fee: $${MovieShop.borrowingFee}`);
      console.log(`Late Fee: $${MovieShop.lateFee}`);
      payment();
      break;

    default:
      break;
  }
}

// This function handles payment when called and ends the program
function payment() {
  let movieList = new MovieShop(username, password, email);
  readline.question(
    "Enter {Y} to continue and {N} to cancel: ",
    (payOption) => {
      payOption.toLowerCase();
      switch (payOption) {
        case "y":
          console.log(`You will be charged $20 for renting this movie\n
          Do well to return it in a week's time or pay a late fee of $5\n
          When returning the movie come along with these details\n
          username: ${movieList.user.username}\n
          email: ${movieList.user.email}\n
          password: ${movieList.user.password}
          Thanks for using our service, we hope you enjoy your movie.`);
          readline.close();
          break;

        case "n":
          console.log(
            `Thanks for checking out our service, we hope you patronize us next time.`
          );
          readline.close();
          break;

        default:
          console.log("Sorry Invalid Option.");
          readline.close();
          break;
      }
    }
  );
}
