function evaporator(content, evap_per_day, threshold){ 
    content = 100
    let day = 0
    
      while(content >= threshold) {
        content -=  content * (evap_per_day / 100)
        day++
      }
      return day
    }

    console.log(evaporator(10,10,10))