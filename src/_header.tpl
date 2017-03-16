<header class="header">
	@@include('_search.tpl')
	<div class="layout-inside">
		<div class="header__holder">
			<!--main navigation-->
			<nav class="nav">
					<ul class="nav__list">
						@@loop('_nav-items.tpl', [
							{
								"mainNavItem": "biography",
								"mainNavItemText": "Биография",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "photos",
								"mainNavItemText": "Фотоальбом",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "404",
								"mainNavItemText": "Видео",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "404",
								"mainNavItemText": "Публикации",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "404",
								"mainNavItemText": "Труды",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "404",
								"mainNavItemText": "Ссылки",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "blog",
								"mainNavItemText": "Блог",
								"mainNavItemActive": "@@mainNavItemActive"
							}
						])
					</ul>
				</nav>
			<!--main navigation end-->
			<!--search-->
			<a href="#" class="btn-search btn-search-open-js"><i></i><span>Поиск</span></a>
			<!--search end-->
		</div>
	</div>
</header>