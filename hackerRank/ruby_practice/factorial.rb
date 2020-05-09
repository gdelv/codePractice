def factorial (n)
    start = 1;
    factArr = Array.new(n) {|i| i+1.to_i } #=> ["0", "1", "2", "3"]
    finalAns = factArr.reverse.reduce(1, :*)
    p finalAns
        
end

factorial(10)