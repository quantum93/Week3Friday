# Beep Boop project

#### Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions. 6/14/2019

#### By **Tae Lee**

## Description

A webpage created with jQuery, CSS and HTML to replace numbers into some words based on rules.
The rules are:
  Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
  Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

The first exception will apply unless the second exception does, and the same with the second and third. For example, in this program,
  The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  The number 21 should be replaced with "Boop".
  The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

A user should be able to enter a new number and see new results over and over again.
Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "I'm Sorry...",
4, 5

This webpage utilizes jQuery and CSS styles. A user input is only number not words including special characters.

### Specs
| Spec.                                                                     | Input   | Output                               |
| :-------------------------------------------------------------------------| :------ | :----------------------------------- |
| enter a number and repeat the number in html webpage                      | 5       | 5                                    |
| The code returns a range of numbers from 0 to the users inputted number   | 5       | 0, 1, 2, 3, 4, 5                     |
| For series of number, 1,2,3 is replaced with specific word                | 5       | 0, Beep!, Boop!, I'm sorry,~ , 4, 5  |


...
...

## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. Open file in a web browser such as Google Chrome.
3. Type a number and click the "Translate!" button.
4. It converts the number into a series of numbers and replaced message based on rules in this program.
5. The bootstrap file should be under "css" folder of project and jQuery file should be under "js" directory.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)

## Support and contact details

If there are any questions, bugs or concerns, please contact taebumlee@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **Tae Lee**
