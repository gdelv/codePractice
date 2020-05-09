def full_name (first, *rest)
    p rest.reduce(first) { |o, x| o + " " + x }
end

full_name('Pradeep', 'Suresh', 'Satyanarayana')

full_name('Horc', 'G.', 'M.', 'Moon')
