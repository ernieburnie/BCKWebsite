$(function(){var b=$("section > .bg"),a=$("#content");function c(){var g,d,k,f,h,j,e;for(g=0,d=b.length;g<d;g++){f=b.eq(g);k=f.data();h=f.parent();h.appendTo(a);if(!k.width){k.width=f.width();k.height=f.height()}j=h.width()/k.width;e=h.height()/k.height;f.css({width:"auto",height:"auto"}).css(j>e?"width":"height","100%");h.detach()}}$(window).bind("post-resize-anim",c)});