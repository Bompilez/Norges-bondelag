;(function(){
  var d=document;
  var i=d.createElement('iframe');
  i.src='https://bompilez.github.io/Norges-bondelag/custom.html';
  i.style.border='none';
  i.style.width='100vw';
  i.style.height='100vh';
  i.setAttribute('frameborder','0');
  i.setAttribute('scrolling','no');
  var s=d.currentScript||d.getElementsByTagName('script')[d.getElementsByTagName('script').length-1];
  s.parentNode.replaceChild(i, s);
})();
