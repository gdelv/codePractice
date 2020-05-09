require 'prime'

# size = gets.to_i
size = 10
p Prime.each.lazy.select{|x| x == x.to_s.reverse.to_i}.first(size)
