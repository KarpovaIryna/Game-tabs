	'use strict';
	$(function(){
		var tabContainers = $('div.ba-tabs > div'); //массив самих закладок
		tabContainers.hide().filter(':first').show();//прячем все кроме первой. если отключены скрипты, все будет видно
	  //обрабатываем клики по табам
		$('div.ba-tabs ul.ba-header a').click(function(){
			tabContainers.hide(); //прячем все табы
			tabContainers.filter(this.hash).show(); //показываем содержимое текущего
			$('div.ba-tabs ul.ba-header a').removeClass('active');
			$(this).addClass('active');
			return false;
	  }).filter(':first').click();
	
	})