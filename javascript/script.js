document.getElementById('colorChange').addEventListener('click',function(){
          function colorChange(){
            let colorRandom = Math.floor(Math.random()*777777);
            let mainProperty = "#" + colorRandom ;
            document.body.style.background = mainProperty;
          }
          colorChange()
});

let task = document.getElementsByClassName('task');
let taskLen = task.length;
document.getElementById('leftTask').innerText = taskLen;

let  date = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dateOutput =`0${date.getDate()}`;
let monthOutput = months[date.getMonth()];
let yearOutput = date.getFullYear();
let dayOutput = daysName[date.getDay()];

document.getElementById("nowDate").innerText = `${monthOutput} ${dateOutput} ${yearOutput}`;
document.getElementById('dayChange').innerText = dayOutput+",";
        

function completed(btnId,taskHeading){
  let availableTaskValue = Number(document.getElementById('leftTask').innerText);
  let availableTask = document.getElementById('leftTask');
  window.alert("Board Updated Successfully!");
  let scoreTaskValue = Number(document.getElementById('scoreTask').innerText);
  let scoreTask = document.getElementById('scoreTask');
  let nowTime = new Date().toLocaleTimeString();
        let button = document.getElementById(btnId);
        let task = document.getElementById(taskHeading).innerText;
         availableTaskValue--;
         scoreTaskValue++;
         availableTask.innerText = availableTaskValue; 
         scoreTask.innerText = scoreTaskValue; 
         button.disabled = true; 
        
         let activityList = document.getElementById('activityList');
         let liItem = document.createElement("li");
         liItem.textContent = `You have Complete The Task ${task} at ${nowTime}`;
         activityList.appendChild(liItem);
        if(availableTaskValue === 0){
            window.alert("congrates!!! You have complited all the current task!");
        }

}
function deleteHistory(){
  let activity  = document.getElementById('activityList');
  activity.innerHTML = '';
}

