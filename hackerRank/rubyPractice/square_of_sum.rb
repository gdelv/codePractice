def square_of_sum (my_array, proc_square, proc_sum)
    sum = proc_sum.call(my_array)
    proc_square.call(sum)
end

proc_square_number = proc { |x| x**2 }
proc_sum_array     = proc { |x| x.reduce(:+) }
finalArr = [1,2,3]
# my_array = finalArr.split().map(&:to_i)

puts square_of_sum(finalArr, proc_square_number, proc_sum_array)