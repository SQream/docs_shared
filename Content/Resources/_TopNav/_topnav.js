$(function() {
  $('.search-container').prependTo('.navigation-wrapper');
  $('.SQreamHomeSite').insertAfter('.search-container');
  $('.SQreamHomeSite').show();
  $('.VersionControl').appendTo('.logo-wrapper');
  $('.VersionControl').show();
  $('.mp-search .VersionControl').hide();

  
  var $window = $(window);
  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 767) {
      $('.search-container').show();
    }
    else {$('.search-container').hide();
  
    }
  }

  $(window).resize(checkWidth);

  var mLabel;
  var mTarget;
  var versionData='';
  
  for(var v in versionsData) {
    mLabel = v;
    mTarget = versionsData[v].url;
    versionData=versionData+"<a href='"+versionsData[v].url+"'>"+v+"</a>";
  }

    $(versionData).prependTo('.dropdown-content');
  
    $('.dropdown-content a').each(function() {
      var VersionNo = $('.dropbtn .ProductVersionsSQream').text();
          if ($(this).text() == VersionNo) {
              $(this).hide();
          }
      });


    });
  
  $(function() {
      $('.home-page .SQreamHomeSite').prependTo('.navigation-wrapper');
      $('.home-page .SQreamHomeSite').show();
  });

  $(function () {
    
     if ($('.mp-search').length) {
     
       var id = setInterval(function () {
         if (!$('.total-results').text().length) return;
         clearInterval(id);
        
                 if ($('.total-results').text() !== '0' && $('#resultList .url cite').length) {
     
       $('#resultList .url cite')
         .each(function () {
           $(this).html($(this).html().replace(/[^\/]+$/, ''));
           $(this).html($(this).html().replace(/_/g, ' '));
 console.log(this)
           $(this).show();
         });
     
     }
       }, 100);
     }
   });