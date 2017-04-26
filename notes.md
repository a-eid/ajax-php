# Ajax and php ((lynda course))  
## Requests ,
`new` `open` `send` <== functions on the xhr objec t
```javascript 
// sending a get request 
var xhr = new XMLHttpRequest() 
xhr.open("GET" , "script.php" , true) 
xhr.send(null)
xhr.onreadstatechange = function(){
  // later 
}
```
```javascript 
// sending a post request "forms" 
var xhr = new XMLHttpRequest()
xhr.open('POST' , 'form_process.php' , true )
// 1-> need to change the header for the content type . 
<!-- xhr.setHeader(header , value) -->
// content-type <== to be form content . 
xhr.setHeader('content-type' , 'application/x-www-form-urlencoded') 
<!-- form-encoding => "application/x-www-form-urlencoded" -->
// 2->  send the form data as an argument to the send function . 
xhr.send("firstname=ahmed&last_name=eid")
``` 
### Handling Responses 

```javascript 
var xhr = new XMLHttpRequest()
xhr.open('get' , 'whatever.php' , true)
// when will it be ready ,
// this is the wrong way of doing it .   
var text = xhr.responseText() 
var json = JSON.parse(xhr.responseText()) 
var xml = xhr.responseXML() 
// this is the right way of doing it . 
xhr.onreadystatechange = function(){
  if(xhr.readystate == 4 && (xhr.status >= 200 && xhr.status < 400)){
    // here is where the response is ready . 
    var target = document.getElementById('replace') 
    target.innerHTML = xhr.responseText 
  }
}
xhr.send()
```

# ch3 -> php server 
how servers recieve ajax requests ... 

  ## Detecting ajax requests 
    options 
    -> pages assumes that all request to it ajax 
    -> page detects ajax requests . 
    (handle ajax differently than regular requests) 

    regular requests and ajax requests look the same to the server . 

    ```javascript
      // convention 
      // set header on client side  
      xhr.setRequestHeader('X-Requested-With' , 'XMLHttpRequest')
    ```
    ```php
      function is_ajax_request(){
        // the header is set and equal to xmlhttprequest 
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && 
        $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'
      }

      if(is_ajax_request())
        echo "Ajax Request"
      else 
        echo "non ajax request" 

    ```
    Be aware that header are not secure they can be spoofed ...  

    <!--Access-Control-Allow-Origin:*-->

  ## respond from php with html partials .

   ```php
   // allow cores 
   header("Access-Control-Allow-Origin: *");
   ```

























