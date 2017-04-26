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
    xhr.withCredentials = true
    xhr.send(data)
  }

  ajax({
    url: "http://localhost:3000/like.php" , 
    method: "POST", 
    dataType:'json',
    success: (res)=>{
      applyPastLikes(res) 
    },
    error: (err)=>{
    },
    data : {fetchAll : "true"} 
  })

  document.querySelectorAll('.like').forEach( x =>{
    x.addEventListener('click' , (e)=>{
      ajax({
        url: "http://localhost:3000/like.php" , 
        method: "POST", 
        success: (res)=>{
          likeOne(res) 
        },
        error: (err)=>{
        },
        data : { like : e.target.parentNode.id}
      })
    })
  })

  document.querySelectorAll('.unlike').forEach( x =>{
    x.addEventListener('click' , (e)=>{
      ajax({
        url: "http://localhost:3000/like.php" , 
        method: "POST", 
        success: (res)=>{
          unlikeOne(res) 
        },
        error: (err)=>{
        },
        data : { unlike : e.target.parentNode.id}
      })
    })
  })

  function likeOne(res){
    document.getElementById(res).classList.add('liked')
  }
  function unlikeOne(res){
    document.getElementById(res).classList.remove('liked')
  }
  function applyPastLikes(res){
    res.forEach(r => {
      document.getElementById(r).classList.add('liked')
    })
  }




}())