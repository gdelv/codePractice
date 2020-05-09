# Enter your code here
def strike str
    return "<strike>#{str}</strike>";
end

def mask_article str,arr
    arr.each do |element|
        striked_element = strike(element) if str.include?(element)
        str.gsub!(element, striked_element)
    end
    str
end

mask_article("Hello World! This is crap!", ["crap"])
# "Hello World! This is <strike>crap</strike>!"