'use strict';

window.game = (function ( $, window, document ) {


} )( jQuery, window, document );

var jewel = (function() {
  var scriptQueue = [],
  numResourcesLoaded = 0,
  numResources = 0,
  executeRunning = false;

  function executeScriptQueue () {
    var scriptQueue = [],
    numResourcesLoaded = 0,
    numResources = 0,
    executeRunning = false;

  function executeScriptQueue(){
    var next = scriptQueue [0],
      first, script;
    if (next && next.loaded){
      executeRunning = true;
      //remove the first element in the queue
      scriptQueue.shift();
      first = document.getElementsByTagName("script") [0];
      script = document.create("script");
      script.onload = function () {
        if (next.callback) {
          next.callback();
        }
        //try to execute more scripts
        executeScriptQueue();
      };
      script.src = next.src;
      first.parentNode.insertBefore(script, first);
    } else {
      executeRunning = false;
    }
  }
  }

 function load(src, callback) {
   var image, ququeEntry;
   numResources++;

   //add this resource to the execution queue
   queueEntry = {
     src: src,
     callback: callback,
     loaded: false
   };
   scriptQueue.push(queueEntry);

   image = new Imahe();
   image.onload = image.onerror = function() {
     numResourcesLoaded++;
     queueEntry.loaded = true;
     if (!executeRunning) {
       executeScriptQueue();
     }
   };
   image.src = src;
 }

 function setup() {
 }
 return {
 load: load,
 setup: setup
 };
 })();
