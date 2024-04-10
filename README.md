# Minute Math React Native Application
I feel like my mental math skills have been lacking and I couldn't find an app that replicates those minute math worksheets from elementary so I've decided to make one myself.

The app starts the user off by allowing them to select the operator they would like (defaults to addition with divide disabled) as well as how long the timer runs for (current default to 10 seconds, mostly for dev purposes but ideally should be 60).
It then starts a 3-second countdown to prepare the user before the actual timer starts, and then displays a problem with two numbers randomly generated from 1-12 and opens the device's number keyboard. 
When the user hits the submit button from the app or on their keyboard, their response is recorded, their input will clear, and a new problem will display.
Once the timer runs out, the user is shown a new screen that displays all of the problems as well as the user's response and is coloured to indicate if it is correct or not.

Through my previous experiments with React Native, I've only really used Text and View components
With this app, I've explored what else it offers, such as TextInput, Button & TouchableHightlight/Opacity, Fragment, and ScrollView
I've also familiarized myself with other tools such as their StyleSheets and React's useContext to distribute values across components

## Current Status of App:
> v1.0: It's the bare minimum, it works great with addition, subtraction is buggy because it can't handle using the negative sign well, multiplication is just broken, and division would require more logic so it's disabled.
