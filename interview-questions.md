# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable in Ruby is a variable that's created from a class. It's different from other variables because it has data and behavior which are defined by the class.

  Researched answer: An instance variable in Ruby is denoted with the @ symbol. They are private so they can't be accessed or mutated from outside the class without using a method. Instance variables are different from local, class, and global variables because there can be different values for two objects of the same class. Local variables are local to the code block, class variables share the same value for multiple instances, and global variables have the same value across classes.


2. What is a block in Ruby?

  Your answer: A block is an anonymous function in Ruby which is enclosed with do/end or {}. Anonymous functions are unnamed functions to perform some action. We've seen this a lot with iterables.

  Researched answer: Blocks are anonymous functions (unnamed functions) and can be passed to methods. They can have their own arguments and have an implicit return.


3. Ruby has an implicit return. What does that mean?

  Your answer: The 'return' keyword is not explicitly specified in Ruby. Everything is an object and every method returns something which makes the return implicit.

  Researched answer: The last line of a method is returned automatically, or the last expression's result. Ruby doesn't use the return keyword so it makes code more concise.


4. What is object-oriented programming? How is it different than functional programming?

  Your answer: OOP involves using objects to define data and behavior. OOP follows a set of design patterns and principles like encapsulation, inheritance and abstraction. This is different from functional programming because the logic is exposed and the functions can be accessed from anywhere.

  Researched answer: OOP uses classes as blueprints for objects which have state and behavior, and follows its own set of design patterns and principles like encapsulation, inheritance, polymorphism and abstraction. Functional programming is based on using pure functions where one input always produces the same output. It avoids sharing state and mutating data as side effects, like changing global variables. Function composition is also supported such as combining multiple functions to produce a new function to perform some action.


5. What is the difference between a class and an object?

  Your answer: A class is a blueprint for an object whereas an object is an instance of a class. The class defines the data and behavior that each object will have, but the data can be different from one object to another. Two objects can behave similarly, but have different properties like different colors.


  Researched answer: A class is a template which defines the properties, default values and describes the behavior of the object via methods. Objects are members of the class. They have a state with properties that are explicitly defined when passing in arguments or are provided by default by the class.


6. STRETCH: What is `attr_accessor`?

  Your answer: attr_accessor is a declaration that allows for some data to be accessed or mutated directly outside of the class.

  Researched answer: attr_accessor allows getting and setting instance variables from outside the class. attr_accessor combines the actions of attr_reader (only getting) and attr_writer (only setting)



## Looking Ahead: Terms for Next Week

1. PostgreSQL: An object relational database management system which uses schemas or tables of rows and columns. Schemas can have relations with other schemas by having shared attributes.
 
2. Ruby on Rails: A server side web application framework built with Ruby which follows the MVC (model-view-controller) design. The model contains the data and logic, the view displays it, and the controller handles the operations for the model and view.

3. CRUD: CRUD are the operations create, read, update, and delete that are used on databases or on persistent storage. Create will create a record or data, read will get the record, update will update an existing record, and delete will remove the record.

4. ORM: ORM is object-relational mapping tool to convert data using an OOP language using SQL queries and Rails.

5. Active Record: An active record is a Rails ORM which takes data from a schema and then allows us to use it like a Ruby object.
