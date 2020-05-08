def skip_animals (arr, skip)
    finalArr = []
    arr.each_with_index do |item, index|
        if (index >= skip)
            finalArr.push("#{index}:#{item}")
        end
    end
    puts finalArr
end


skip_animals(['leopard', 'bear', 'fox', 'wolf'], 2)
# => ["2:fox", "3:wolf"]