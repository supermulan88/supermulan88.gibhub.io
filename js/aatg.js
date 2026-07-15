/* AATG — shared behaviour: mobile nav + scroll reveal */
(function(){
  var b=document.getElementById('burger'), n=document.getElementById('navlinks');
  if(b&&n){
    b.addEventListener('click',function(){n.classList.toggle('open')});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open')})});
  }
  var els=document.querySelectorAll('.rv');
  if(!els.length) return;
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')}); return;}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.14});
  els.forEach(function(el){io.observe(el)});
})();
