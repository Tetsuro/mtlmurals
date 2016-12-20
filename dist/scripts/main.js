"use strict";var mtlMurals=function(){function e(){f=new google.maps.Map(document.getElementById("map")),t().then(function(e){return f.addListener("dragend",n),f.addListener("zoom_changed",n),e}).then(a).then(i).then(function(){g.html(_),p.html(_)})}function t(){return new Promise(function(e,t){$.ajax({dataType:"json",cache:!1,url:"https://proxy.hackeryou.com",data:{reqUrl:o,xmlToJSON:!1},success:e,error:t})})}function a(e){var t=e.features;_=t.length;var a=new google.maps.LatLngBounds;t.forEach(function(e,t){var n=e.properties.latitude,i=e.properties.longitude,o=e.properties.image,l=e.properties.adresse,d=(e.properties.artiste,e.properties.annee,new google.maps.Marker({position:{lat:e.properties.latitude,lng:e.properties.longitude},map:f,title:l,animation:google.maps.Animation.DROP,id:t,image:o})),u=new google.maps.LatLng(n,i);a.extend(u),h.push(d),d.addListener("click",function(){r.html(l),s.attr("src",o)})}),f.fitBounds(a),n()}function n(){var e=f.getBounds();L=0,h.forEach(function(t){e.contains(t.position)?($("[data-index="+t.id+"]").show(),L++):$("[data-index="+t.id+"]").hide()}),g.html(L)}function i(){h.forEach(function(e){var t=document.createElement("li"),a=document.createElement("button"),n=document.createElement("span"),i=document.createElement("img");t.classList.add(d),t.setAttribute("data-index",e.id),l[0].appendChild(t),t.appendChild(a),a.classList.add(u),n.innerHTML=e.title,n.classList.add(c),i.setAttribute("data-src",e.image),i.classList.add("lazyload",m),a.appendChild(i),a.appendChild(n)})}var o="http://donnees.ville.montreal.qc.ca/dataset/53d2e586-6e7f-4eae-89a1-2cfa7fc29fa0/resource/d325352b-1c06-4c3a-bf5e-1e4c98e0636b/download/murales.json",r=$(".mural-info__title"),s=$(".mural-info__image"),l=$(".mural-list"),d="mural-list__item",u="mural-list__button",c="mural-list__span",m="mural-list__image",p=$(".mural-count__total"),g=$(".mural-count__visible"),f={},h=[],_=0,L=void 0;return{initMap:e}}();mtlMurals.initMap();