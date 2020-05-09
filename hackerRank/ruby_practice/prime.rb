def prime?(n)
    if n < 2
        p false
    else
    p (2..n/2).none?{|i| n % i == 0}
    end
end

prime?(19)