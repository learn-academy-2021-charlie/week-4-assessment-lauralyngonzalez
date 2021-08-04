# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# wordsWithLetter
# params arr, letter
# select with every element.include?(letter)

# Returns an array of words that have the given letter.
def wordsWithLetter(words, letter)
    #only select the words that contain that letter
    words.select{|word| word.include?(letter)}  
end

p wordsWithLetter(beverages_array, letter_o)
p wordsWithLetter(beverages_array, letter_t)

puts ''


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# removeVowels
# param str
# create arr with vowels
# go through each vowel in arr using map and use str.delete(vowel) on each vowel
# modify the string with delete!
# delete both capitalized and lowercased vowels
# return the string

def removeVowels str
    vowels = ['a', 'e', 'i', 'o', 'u']
    # iterate through each vowel and delete the vowel if's in str, modifying the str
    vowels.map {|vowel| str.delete!(vowel) and str.delete!(vowel.upcase)}
    str
end

puts removeVowels album1 # Rbbr Sl
puts removeVowels album2 # Sgt Pppr
puts removeVowels album3 # bby Rd 

puts ''

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_reader :current_speed

    def initialize model
        @wheels = 2
        @current_speed = 0
        @model = model
    end

    def get_info
        puts "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    # Increases the speed to the given speed
    def pedal_faster speed
        @current_speed = speed
    end

    # Decreases the speed. Speed cannot be negative
    # Subtract given speed from the current speed.
    # Use max with 0 in case the current speed becomes negative
    def brake speed
        @current_speed = [@current_speed-speed, 0].max
    end
end

trek = Bike.new 'Trek'
trek.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

my_bike = Bike.new 'Giant'

my_bike.pedal_faster 10
p my_bike.current_speed     # defined current_speed with attr_reader

my_bike.brake 15
p my_bike.current_speed