<header class="header">
	@@include('_search.tpl')
	<div class="layout-inside">
		<div class="header__holder">
			<!--main navigation-->
			@@include('_main-navigation.tpl', {
				"mainNavItemActive": "@@mainNavItemActive"
			})
			<!--main navigation end-->
			<!--lang-->
			<div class="lang js-choice-wrap">
				<a href="#" class="js-choice-open" title="Выбрать язык">
					<span>Рус</span>
				</a>
				<ul class="lang__list js-choice-drop">
					<li><a href="#"><span>Бел</span></a></li>
					<li class="current"><a href="#"><span>Рус</span></a></li>
					<li><a href="#"><span>Eng</span></a></li>
				</ul>
			</div>
			<!--lang end-->
			<!--search-->
			<a href="#" class="btn-search btn-search-open-js"><i></i><span>Поиск</span></a>
			<!--search end-->
		</div>
	</div>
</header>