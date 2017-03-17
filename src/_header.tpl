<header class="header">
	@@include('_search.tpl')
	<div class="layout-inside">
		<div class="header__holder">
			<!--main navigation-->
			@@include('_main-navigation.tpl', {
				"mainNavItemActive": "@@mainNavItemActive"
			})
			<!--main navigation end-->
			<!--search-->
			<a href="#" class="btn-search btn-search-open-js"><i></i><span>Поиск</span></a>
			<!--search end-->
		</div>
	</div>
</header>