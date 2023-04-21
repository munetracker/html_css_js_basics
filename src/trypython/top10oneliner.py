# swap 2 variables
a = 2
b = 5
print(a,b)
a, b = b, a
print(a,b)

# list comprehension
squares = []
for i in range(10):
    if i % 2 == 0:
        squares.append(i*i)
print(squares)

squares = [i*i for i in range(10) if i % 2 == 0]
print(squares)

# if else (ternary operator)
var = 42 if 3>2 else 99
print(var)

# print without new lines
data = [0, 1, 2, 3, 4, 5]
print(*data)
print("done")

# days left in year
import datetime;
current_day = datetime.date.today()
current_month = current_day.month
current_year = current_day.year
last_day_of_month = datetime.date(current_year, current_month + 1, 1) - datetime.timedelta(days=1)
remaining_days_of_current_year = (datetime.date(current_year, 12, 31)-datetime.date.today()).days

print(current_day, current_month, current_day.day, current_year, last_day_of_month, remaining_days_of_current_year)

# reversing a list - palindrome
a = "level"
print(a == a[::-1])

# multiple variable assignments
name , age , isActive = "Patrick", 32, True
print(name , age , isActive)

# space separated numbers to integer list
user_input = "1 2 3 4 5 6"
mylist = list(map(int, user_input.split()))
print(mylist)

# not working
# reading file into list
storeddata = [line.strip() for line in open("storeddata.txt", "r")]
print(storeddata)

# python -m http.server
# run http server on localhost

