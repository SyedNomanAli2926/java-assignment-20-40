//Javascript Objects ( 21 - 42 )

//Assignment #21- 25

//1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


//  var firstname = prompt("Enter your first name:");
//  var lastname = prompt("Enter your last  name:");
// var fullname = firstname + lastname;
// alert("Hello"+ fullname);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var a = prompt("Enter your Favourite Mobile Phone Model:");
// document.write("Your Favourite Phone is: "+ a , "<br>");
// document.write("Length of string is: "+a.length);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var country = ("Paklistan");
// document.write("String: Pakistani",)
// document.write("Indexof 'n': "+ country.indexOf("n"));


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var country = ("Hello World");
// document.write("Last Index of 'l': "+ country.lastIndexOf("l"));


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var country = ("Paklistan");
// document.write("String: Pakistani" , "<br>")
// document.write("Character at index 3 : "+ country[3]);



// 6. Repeat Q1 using string concat() method.

// var firstname = prompt("Enter your first name:");
// var lastname = prompt("Enter your last  name:");
// var fullname = firstname.concat(" "+lastname);
// alert("Hello "+ fullname);



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var count = ("Hyderabad" );
// var rep = count.replace("Hyderabad" , "Islamambad");
// document.write("City : " + count , "<br>");
// document.write("After Replacement : "+ rep);



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var newmessage = message.replaceAll("and" , "&");
// document.write("After Replacement :"+ newmessage);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var value = prompt("Enter the number you want to convert in number:");
// document.write("Value: " + value , "<br>");
// document.write("Type: String" , "<br>");
// var number = parseInt(value);
// document.write("Number: "+ number , "<br>");
// document.write("Type: Number" , "<br>");



// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var inp = prompt("Enter any text you want to convert in uppercase: ");
// document.write("User input : " + inp , "<br>" );
// document.write("Capital case : "+ inp.toUpperCase());


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var inp = prompt("Enter any text you want to convert in uppercase: ");
// document.write("User input : " + inp , "<br>" );
// document.write("Title case : "+ inp.slice(0,1).toUpperCase() + inp.slice(1));


// 12. Write a program that converts the variable num to
// string.

// var num = prompt("Enter the number which you want to convert in string:");
// document.write("Number: "+ num  , "<br>");
// num = num.toString();
// num = num.replace(".","");
// document.write("Result: "+ num);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@


// var username = prompt("Enter your user name :");
// if(username.includes(".")|| username.includes("@")|| username.includes(",")|| username.includes("!")){
//     alert("Enter a valid username.")

// }else{
//     alert("Hello "+ username);

// }



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("hello there what do you want to order?").toLowerCase();
// var CON = false
// for(var i = 0; i < A.length; i++){
//     if(search ===  A[i]){
//         CON = true;
//         alert(search + " is available at index " + i + " in the bakery ");
//     }
// }
// if(CON === false){
//     alert("Sorry " + search + " is not available in the bakery ");
// }



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:


// var password = prompt("Enter the password you want to save");
// if(password.length<6){
//     alert("Password should be of 6 caharacters");
// }
// else if(password.includes(".")|| password.includes("@")|| password.includes(",")|| password.includes("!")){
//     alert("Password should contain alphabets and numbers");

// }
// else if(password.charAt(0)==="9" || password.charAt(0)==="8" || password.charAt(0)==="7" || password.charAt(0)==="6"|| password.charAt(0)==="5"|| password.charAt(0)==="4"|| password.charAt(0)==="3" || password.charAt(0)==="2" || password.charAt(0)==="1" || password.charAt(0)==="0"){
//     alert("It should not start with a number");
// }




// 16. Write a program to convert the following string to an
// array using string split method.
// var university = "University of Karachi";
// for (var i=0 ; i < university.length ; i++){
//     document.write(university[i], "<br>");
// }


// 17. Write a program to display the last character of a user
// input.

// var inp = prompt("Enter anything of which last character  you want to display:");
// document.write("User input: "+ inp , "<br>");
// document.write("Last letter: "+ inp.charAt(inp.length-1));



// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var text = "The quick brown fox jumps over the lazy dog.";
// document.write("text: "+ text, "<br>" );
// text = text.toLowerCase();
// document.write("There are "+ text.match(/the/g).length+" Occurencies of the word 'the'")

//chap 21-25 end



//chap 26-30 start


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.

// var num = +prompt("Enter a positive integr: ");
// document.write("Number: "+ num , "<br>" );
// document.write("Round off value: "+ Math.round(num) , "<br>" );
// document.write("Floor value: "+ Math.floor(num) , "<br>" );
// document.write('Ceil Value '+ Math.ceil(num) , "<br>" );



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.

// var num = +prompt("Enter a negative floating point: ");
// document.write("Number: "+ num , "<br>" );
// document.write("Round off value: "+ Math.round(num) , "<br>" );
// document.write("Floor value: "+ Math.floor(num) , "<br>" );
// document.write('Ceil Value '+ Math.ceil(num) , "<br>" );


// 3. Write a program that displays the absolute value of a
// number.

// var num = +prompt("Enter the number of which you want a absolute value: ");
// num = num.toString();
// var num1 = num.replace("-","");
// document.write("Absolute value of "+ num +" is " + num1);




// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var  dice = Math.random()*6+1;
// document.write("Random dice value: "+ Math.floor(dice));



// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var toss = Math.random()*2;
// if( Math.ceil(toss)== 2){
//     document.write("Random coin value: "+ "Heads");
// }
// else if( Math.ceil(toss)== 1){
//     document.write("Random coin value: "+ "tails");
// }




// 6.Write a program that shows a random number between 1
// and 100 in your browser.

// var  ran = Math.random()*100+1;
// document.write("Random numbver between 1 and 100: "+ Math.floor(ran));


// 7. Write a program that asks the user about his weight. Parse

// the user input and display his weight in your browser.
// Possible user inputs can be:
// var weight = prompt("Enter your weight in  kilograms:");
// document.write("The weight of the user is "+ parseInt(weight)+" Kilograms" );



//8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var num = Math.random*10+1;
// var user = +prompt("Guess the number: " );
// if(Math.floor(num) == user){
//     alert("Congratulation you guess the correct number");
// }else{
//     alert("Try again!");
// }

//chap 26-30  end


//chap 31-34 start


// 1. Write a program that displays current date and time in
// your browser.

// var date = new Date();
// document.write(date);



// 2. Write a program that alerts the current month in words.
// For example December.

// var date = new Date();
// var currentMonth = date.getMonth();
// var monthsIndex = [0,1,2,3,4,5,6,7,8,9,10,11];
// var monthsName = ["January", "Febuary", "March" , "April", "May", "June","July"
//                , "August", "September", "October", "November", "December"];

// for (var i = 0;i < monthsIndex.length; i++) {
//     if(monthsIndex[i] === currentMonth) {
//          alert("Current Month: " + monthsName[i]);
//     }

// }



// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var date = new Date();
// var currentMonth = date.getDay();
// var monthsIndex = [0,1,2,3,4,5,6];
// var monthsName = ["Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday","Sunday"];

// for (var i = 0;i < monthsIndex.length; i++) {
//     if(monthsIndex[i] === currentMonth) {
//          alert("Current day: " + monthsName[i]);
//     }
// }


// 4.Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var day = new Date();
// var fun = day.getDay();
// if(fun==5 || fun==6){
//     alert("It's a fun day ");
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date();
// var newdate= date.getDate();
// if(newdate<=15){
//     alert("first Fifteen days of the month ")
// }else{
//     alert("last Fifteen days of the month ")
// }



// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// var time = date.getTime();
// document.write("Current date: "+ date ,"<br>");
// document.write("Elapsed millisecond since january 1, 1970: "+ time  ,"<br>");
// document.write("Elapsed minutes since january 1, 1970: "+ time/(1000*60*60));



// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var hour = date.getHours();
// if(hour<12){
//     alert("It's AM");
// } else if(hour<24){
//     alert("IT's PM")
// }