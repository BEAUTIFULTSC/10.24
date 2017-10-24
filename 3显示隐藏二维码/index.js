function changeClass(element, searchVal, replaceVal){
      var classArr = element.className.split(" ");
      var index = classArr.indexOf(searchVal);
      classArr[index] = replaceVal;
      element.className = classArr.join(" ");
}