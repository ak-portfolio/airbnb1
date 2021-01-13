$(function(){
  'use strict';
  $('[data-toggle="tooltip"]').tooltip();
$.fn.visibleToggle=function(){
  return this.css('visibility',function(i,visible){
    return (visible == 'visible')?'hidden':'visible';
  });
}
$.fn.animate2=function(properties,duration,ease){
  ease =ease || 'ease';
  var $this=this;
  var cssOrig={transition:$(this).css('transition')};
  return $this.queue(next =>{
    properties['transition']='all'+duration+'ms'+ease;
    $this.css(properties);
    setTimeout(function(){
      $this.css(cssOrig);
      next();
    },duration);
  });
};
var nav=0;
var nav1=0;
var nav2=0;
$('.btn-h').click(function(){
  $('.host').visibleToggle();
  $('#host-top').scrollTop(0);
});
$('.h-item1').click(function(){
  $(this).toggleClass('ac');
  $('.h-a1').toggle();
});
$('.h-item2').click(function(){
  $(this).toggleClass('ac');
  $('.h-a2').toggle();
});
$('.h-item3').click(function(){
  $(this).toggleClass('ac');
  $('.h-a3').toggle();
});
$('.btn-help').click(function(){
  $('.host').css('visibility','hidden');
  $('.help-wrapper').toggle();
  $('#h-top').scrollTop(0);

});
$('.h-item').click(function(){
  $(this).toggleClass('ab');
  $('.nav-wrapper').slideToggle();
  $('.nav-container').slideDown("slow");
  if(nav1==0){
  $('html').css({overflow: 'hidden'});
  nav1=1;
  nav2=1;
}else{
  $('html').css('overflow-y','auto');
  nav1=0;
  nav2=0;
}
});
$('#check0').click(function(){
if($('#check0').prop('checked')){
    $('.lg-item0').css('font-weight','bold');
  }else{
    $('.lg-item0').css('font-weight','normal');
  }});
$('.a1').click(function(){
  $('.h-main').css('visibility','hidden');
  $('.h-main-sp').visibleToggle();
});
$('.help-sp').click(function(){
  $('.h-main-sp').css('visibility','hidden');
  $('.h-main').visibleToggle();
});
$('.h-close').click(function(){
  $('.help-wrapper').hide();
  $('html').css('overflow-y','auto');
});
$('.l-close').click(function(){
  $('.login-modal-wrapper').hide();
  $('.al').hide("");
  $('.inputb').val("");
  if(nav2==1){
  $('html').css({overflow: 'hidden'});
  }else{
  $('html').css('overflow-y','auto');
}});
$('.k-close').click(function(){
  $('.signup-modal-wrapper').hide();
  if(nav2==1){
  $('html').css({overflow: 'hidden'});
  }else{
  $('html').css('overflow-y','auto');
}});
$('.m-close').click(function(){
  $('.mail-modal-wrapper').hide();
  $('html').css('overflow-y','auto');
});
$('.lg-close').click(function(){
  $('.language').hide();
  $('.lg').hide();
  $('html').css('overflow-y','auto');
});
$('.mn-close').click(function(){
  $('.money').hide();
  $('.mn').hide();
  $('html').css('overflow-y','auto');
});
$('.help-mail').click(function(){
  $('.mail-modal-wrapper').hide();
  $('.al').hide("");
  $('.inputb').val("");
  $('.login-modal-wrapper').show();
});
$('.btn-signup').click(function(){
  $('.login-modal-wrapper').toggle();
  $('.modal1').show();
  $('html').css({overflow: 'hidden'});
});
$('.bb').click(function(){
  $(document).on('click',function(e){
    if(!$(e.target).closest('#language1').length && !$(e.target).closest('.bb').length){
        $('.language').hide();
        $('.lg').hide();
        $('html').css('overflow-y','auto');
      }else if($(e.target).closest('.lg-close').length){
        $('.language').hide();
        $('.lg').hide();
        $('html').css('overflow-y','auto');
    }else if(!$(e.target).closest('.lg-item').length){
      if($('#language1').is(':hidden')){
        $('.language').show();
        $('.lg').show();
        $('html').css({overflow: 'hidden'});

      }else{
        $('.language').hide();
        $('.lg').hide();
        $('html').css({overflow: 'hidden'});
      }
    }
    });
});

$('.bc').click(function(){
  $(document).on('click',function(e){
    if(!$(e.target).closest('#money1').length && !$(e.target).closest('.bc').length){
        $('.money').hide();
        $('.mn').hide();
        $('html').css('overflow-y','auto');
      }else if($(e.target).closest('.mn-close').length){
        $('.money').hide();
        $('.mn').hide();
        $('html').css('overflow-y','auto');
    }else if(!$(e.target).closest('.lg-item').length){
      if($('#money1').is(':hidden')){
        $('.money').show();
        $('.mn').show();
        $('html').css({overflow: 'hidden'});
      }else{
        $('.money').hide();
        $('.mn').hide();
        $('html').css({overflow: 'hidden'});
      }
    }
    });
});

  var change=0;
$('.c0').on('click',function(){
  if(change==0){
    $('.i1').hide();
    $('.c1').css('font-weight','normal');
  $('.i0').show();
  $('.c0').css('font-weight','bold');
  $('.bb').text('Bahasa Indonesia');
  change=1;
}else{
  $('.i0').hide();
  $('.c0').css('font-weight','normal');
  $('.i1').hide();
  $('.c1').css('font-weight','normal');
  $('.bb').text('日本語');
  $('.i25').show();
  $('.c25').css('font-weight','bold');
  change=0;}
});
$('.c1').on('click',function(){
  if(change==0){
  $('.i1').show();
  $('.c1').css('font-weight','bold');
  $('.bb').text('Bahasa Melayu');
  $('.i0').hide();
  $('.c0').css('font-weight','normal');
  change=1;
}else{
  $('.i1').hide();
  $('.c1').css('font-weight','normal');
  $('.bb').text('日本語');
  $('.i0').hide();
  $('.i25').show();
  $('.c25').css('font-weight','bold');
  $('.c0').css('font-weight','normal');
  change=0;}
});
$('.d0').on('click',function(){
  if(change==0){
  $('.d1').css('font-weight','normal');
  $('.d0').css('font-weight','bold');
  $('.bc').text('アルゼンチンペソ - $');
  change=1;
}else{
  $('.d0').css('font-weight','normal');
  $('.d1').css('font-weight','normal');
  $('.bc').text('JPY -¥');
  $('.d22').css('font-weight','bold');
  change=0;}
});
$('.d1').on('click',function(){
  if(change==0){
  $('.d1').css('font-weight','bold');
  $('.bc').text('豪ドル - $');
  $('.d0').css('font-weight','normal');
  change=1;
}else{
  $('.d1').css('font-weight','normal');
  $('.bc').text('JPY -¥');
  $('.d22').css('font-weight','bold');
  $('.d0').css('font-weight','normal');
  change=0;}
});
$('.btn-login').click(function(){
  $('.signup-modal-wrapper').toggle();
  $('.moda2').show();
  $('html').css({overflow: 'hidden'});
});
$('.login-a').click(function(){
  $('.signup-modal-wrapper').hide();
  $('.inputb').val("");
  $('.al').hide("");
  $('.mail-modal-wrapper').toggle();
  $('.modal3').show();
  $('html').css({overflow: 'hidden'});
});
$('.mail-text').focusin(function(e){
  $('.qqq').addClass('mail-txt');
}).focusout(function(e){
  $('.qqq').removeClass('mail-txt');
})
$('.login-t').on('click',function(){
  if($('.name-i').val() === ''){
    $('.alert-p1-2').hide();
    $('.alert-p1').show();
    $('.red1').css('background-color','#FFF8F6');
    $('.red1').css('border-color','#D93900');
    $('.name-i').css('background-color','#FFF8F6');
  }else if($('.name-i').val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9\._-])+([a-zA-Z0-9\._-]+)+$/) ){
    $('.alert-p1').hide();
    $('.alert-p1-2').hide();
    $('.red1').css('background-color','#fff');
    $('.red1').css('border-color','#EBEBEB');
    $('.name-i').css('background-color','#FFF');
  }else{
    $('.alert-p1').hide();
    $('.alert-p1-2').show();
    $('.red1').css('background-color','#FFF8F6');
    $('.red1').css('border-color','#D93900');
    $('.name-i').css('background-color','#FFF8F6');
  }});
$('.login-t').on('click',function(){
  if($('.pass-i').val() === ''){
    $('.alert-p2').show();
    $('.alert-p2-2').hide();
    $('.red2').css('background-color','#FFF8F6');
    $('.red2').css('border-color','#D93900');
    $('.pass-i').css('background-color','#FFF8F6');
  }else if($('.pass-i').val().length <8){
    $('.alert-p2-2').show();
    $('.alert-p2').hide();
    $('.red2').css('background-color','#FFF8F6');
    $('.red2').css('border-color','#D93900');
    $('.pass-i').css('background-color','#FFF8F6');
  }else{
  $('.alert-p2').hide();
  $('.alert-p2-2').hide();
  $('.red2').css('background-color','#fff');
  $('.red2').css('border-color','#EBEBEB');
  $('.pass-i').css('background-color','#FFF');
}});
$('.login-y').on('click',function(){
  if($('.mail-text').val() === ''){
    $('.alert-p4').hide();
    $('.alert-p3').show();
    $('.red3').css('background-color','#FFF8F6');
    $('.red3').css('border-color','#D93900');
    $('.mail-text').css('background-color','#FFF8F6');
  }else if($('.mail-text').val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9\._-])+([a-zA-Z0-9\._-]+)+$/) ){
  $('.alert-p3').hide();
  $('.alert-p4').hide();
  $('.red3').css('background-color','#fff');
  $('.red3').css('border-color','#EBEBEB');
  $('.mail-text').css('background-color','#FFF');
}else{
  $('.alert-p3').hide();
  $('.alert-p4').show();
  $('.red3').css('background-color','#FFF8F6');
  $('.red3').css('border-color','#D93900');
  $('.mail-text').css('background-color','#FFF8F6');
}});
var button=0;
$('.pass-p').click(function(){
  if(button===0){
    $('.pass-i').attr('type','text');
    $('.pass-p').text('パスワードを非表示にする');
    button++;
  }else{
    $('.pass-i').attr('type','password');
    $('.pass-p').text('パスワードを表示する');
    button--;
  }
});
$('.login-sign').click(function(){
  $('.inputb').val("");
  $('.al').hide("");
  $('.signup-modal-wrapper').hide();
  $('.login-modal-wrapper').show();
});
$('.sign-login').click(function(){
  $('.login-modal-wrapper').hide();
  $('.signup-modal-wrapper').show();
});
});
