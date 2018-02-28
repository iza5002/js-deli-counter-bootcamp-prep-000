    
'use strict';
 	 
function line(deli){
// your code here	
if(deli.length === 0){
      var response = "The line is currently empty.";
      // console.log(response);
      return response;
    }else{

    var queue = [];
      deli.forEach(function(person, index){
        queue.push((index + 1).toString() + ". " + person);
      });
      var response = "The line is currently: " + queue.join(", ")
      // console.log(response);
      return response;
    }
};
 	 
function nowServing(katzDeli){
// If there is nobody in line, it should return "There is nobody waiting to be served!"
  if (0 === katzDeli.length){
    var response = "There is nobody waiting to be served!";
    console.log(response);
    return response;
  } 
  else { 
// return the next person in line and then remove them from the line.
    var nextPerson = katzDeli.shift()
    var response = "Currently serving " + nextPerson + ".";
    console.log(response);
    return response;
  }
};
 	 
function takeANumber(katzDeli, name){
  // accept a line of people and his/her name
  // return position in line
  var position = katzDeli.length + 1;
  katzDeli.push(name);  
  var response = "Welcome, " + name + ". You are number " + position + " in line.";
  return response;
}

function currentLine1(line){
  if (line.length === 0){
    return "The line is currently empty."
  }else{
    var lineObject = {};
    for (var i=0; i<line.length; i++){
      lineObject[i+1] = line[i]
    }
    console.log(lineObject)
  }
  
  var item = ''
  var arr = ["The line is currently: "]
  for (var key in lineObject){
    item = key + ": " + lineObject[key]
    arr.push(item)
  }
  return arr;

}

currentLine1(["Bill", "Jane", "Ann"])
