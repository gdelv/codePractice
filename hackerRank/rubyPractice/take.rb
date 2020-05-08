# > take([1,2,3], 1)
# [2, 3]
# > take([1,2,3], 2)
# [3]
# > take([1,2,3])
# [2, 3]

def take(arr, start = 1)
    p arr[start-1,arr.length-1]
end
def take(arr, start = 1)
    return arr.slice(start,arr.length)
end


take([1,2,3], 1)

take([1,2,3], 2)

take([1,2,3])
