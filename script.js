window.onload=function(){
  var header = document.getElementsByClassName('Header');
  header[0].setAttribute('style','background-color: #e5e5e5;border-bottom: 1px solid #eee;');

  var header_search = document.getElementsByClassName('header-search-wrapper');
  header_search[0].setAttribute('style','background-color: #fff');

  var header_search_scope = document.getElementsByClassName('header-search-scope');
  header_search_scope[0].setAttribute('style','color: #000; border-right-color: #eee;');

  var header_search_input = document.getElementsByClassName('header-search-input');
  header_search_input[0].setAttribute('style','color: #000;');

  var header_nav_links = document.getElementsByClassName('HeaderNavlink');
  for(index in header_nav_links){
      header_nav_links[index].setAttribute('style','color: #000;');
  }

  var mail_status = document.getElementsByClassName('mail-status');
  mail_status[0].setAttribute('style','border: 2px solid #e5e5e5;');
}
