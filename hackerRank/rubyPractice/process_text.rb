
# > process_text(["Hi, \n", " Are you having fun?    "])
# "Hi, Are you having fun?"
# arr of strings 

def process_text arr
    puts arr.map { |s| s.strip }.join(" ")  
end


process_text(["Hi, \n", " Are you having fun?    "])