def leap_year(year):
    print year % 4 == 0 and (year % 400 == 0 or year % 100 != 0)

leap_year(2100) # False
leap_year(1990) # False
leap_year(2000) # True