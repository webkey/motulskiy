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
								"mainNavItem": "videos",
								"mainNavItemText": "Видео",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "publications",
								"mainNavItemText": "Публикации",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "works",
								"mainNavItemText": "Труды",
								"mainNavItemActive": "@@mainNavItemActive"
							},{
								"mainNavItem": "links",
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