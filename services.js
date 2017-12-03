//Services for making the api call
/**
 * 1 . What is service in Angular JS used for ?
 * 2 . What are promise calls in angular js
 * 3 . Difference between service and Factory 
 * 
 */
app.service("GetBreds",function($http,$q){
    var breds = this;
    breds.getAllBreds = {};


    breds.getMeAllBreds = function(){
        var defer = $q.defer();
        $http.get("https://dog.ceo/api/breeds/list")
        .success(function(res){
            breds.getAllBreds = res;
            defer.resolve(res);
        })
        .error(function(error){

            defer.reject(error);
        })

        return defer.promise;
    }
    return breds;
})

/*subclass 457 :

**Asynchronous calls :

function returnNumber(){
	var number = null;
	
	number = 2;
	
	return number
	

}

console.log(returnNumber()); // the above method returns the number to be 2 
-------------------------------
** But there are times due to network calls of the apis that the assignment of the variable gets delayed and the value retuned is not as expected like :

function returnNumber(){
	var number = null;
  //number = 2;
  setTimeout(function(){ number = 2; }, 3000);
  return number;
}
alert("The number is :" +returnNumber());

Here the value that is retuned is null since the assigment of the value is delayed by 3 secs .
--------------------------------
But there are scenarios where we want the number to only return 2 or be it the case of api returing
some values and we want those values to be displayed .
We can use the promise calls in those scenarios be it the jquery promise or the angular promises 
depending on the program language we are using .

function retunNumber(){

var deferredObj = new deferredObj(); // creating new promise object
var number = null;

 setTimeout(function(){ 
	number = 2;                      // resolving the promise call so that when the value of number
										is being set to 2 then we are resolving the object
	deferredObj.resolve(number);

 }, 3000);
 
 return deferredObj.promise;             // instead of returing the number now we are returning the promise object
}

retunNumber().then(function(number){     // once the promise object is resolved then this method is called
                                         with the value of the number we are passing in from the resolved object
alert(number);
});
-----------------------------------
** Chaining of the Promises calls :

Depending on the preference of the scripting language we can chain up the 
various promises calls into one .

For instance in angular we may do something like this :
all([retunNumber()],[retunNumber1()],[retunNumber2()]).then(function(data){
data[0] // data[0] will be corresponding to the call of the array retunNumber()
data[1] // data[1] will be corresponding to the call of the array retunNumber1()
data[2] // data[1] will be corresponding to the call of the array retunNumber2()

})
*/