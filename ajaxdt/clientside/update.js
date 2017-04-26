(function(){ 
  function ajax(options){
    var data = null 
    var xhr = new XMLHttpRequest()
    xhr.open( options.method|| "GET" , options.url , true) 
    // form headers 
    options.multipart ? 
      // multiheader header should go here 
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"): 
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        if(xhr.responseText){
          options.success(
            options.dataType =='json' ? JSON.parse(xhr.responseText) : xhr.responseText
          )
        }else{
          options.error("something went wrong")
        }
      }
    } 
    if(options.data){
      data = ""
      for(var x in options.data){
        data += x + "=" + options.data[x] + "&"
      }
      data = data.slice(0 , -1) 
    }
    xhr.send(data)
  }

  var category = document.querySelector('#categorySelect') 
  category.addEventListener('change' , (e) => {
    ajax({
      url:"http://localhost:3000/update.php" , 
      multipart: false , 
      method:"POST" , 
      data: {
        category: category.options[category.selectedIndex].value 
      } , 
      dataType: 'json' , 
      success: function(json){
        populateSubCategory(json) 
      },
      error: function(msg){
        console.log(msg)
      }
    })
  })

  function populateSubCategory(json){
    var subCategory = document.querySelector('#subcategorySelect')
    subCategory.innerHTML = ""
    json.forEach( (item) => {
      var o = document.createElement('option')      
      var t = document.createTextNode(item.name)
      o.value = item.name
      o.appendChild(t)
      subCategory.appendChild(o)
    })
    subCategory.style.display = 'inline'
  }
}())