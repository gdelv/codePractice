def convert_temp (temp, input_scale:, output_scale: 'Celsius')
    case input_scale.downcase
# F -> C
    when 'fahrenheit'
        return output_scale == 'kelvin' ? 
        ((temp - 32) / 1.8) + 273.15 : (temp - 32) / 1.8
# C -> C
    when 'celsius'
        return output_scale == 'kelvin' ?
        temp + 273.15 : ( 32 + (temp* 1.8)
# K -> C
    when 'kelvin'
        return output_scale == 'celsius' ?
        temp - 273.15 : (temp - 273.15) * 1.8
    end
end


