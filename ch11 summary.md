#chapter 11

##What is Asynchronous programming?
Lets try to understand how Asynchronous programming work.
suppose you have 2 tasks in hand

1. Boil Milk (takes 5 minutes)
2. Make tea (takes 7 minutes)

Synchronouly it will take 12 minutes
Asynchronouly it will take 7-8 minutes

##How to achieve it?
we can achieve via following three ways

##Callback
Suppose making tea has following steps:
Make tea: 1. boil water 2. add ingredients
in synchronous way what we would do is.

    boil_water();
    add_ingredients();
    boil_milk();

how to solve the problem?

    boil_water(add_ingredients);
    boil_milk();

somwhere inside boil_water:

    boil_water(callbackFunction){

    //body for boiling water

    callbackFunction();
    }

##Promise
A promise is an asynchronous action that may complete at some point of time and produce a value.

##Async n await
it is just a syntactic sugar around promises.
