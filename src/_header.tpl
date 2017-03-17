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
								"mainNavItemActive": "@@mainNavItemActive",
								"arr": {
									"key_11":{
										"key_111":"val_111"
									},
									"key_12":"val_l2",
									"key_13":"val_l3"
								},
								"cond": {
									"index": "key_12",
									"drop": {
										"key_111":"val_111",
										"key_112":"val_112",
										"key_113":"val_113"
									}
								}
							},{
								"mainNavItem": "photos",
								"mainNavItemText": "Фотоальбом",
								"mainNavItemActive": "@@mainNavItemActive",
								"arr": {
									"key2": {
										"key21":"val11",
										"key22":"val12",
										"key23":"val13"
									},
									"key2":"val2",
									"key3":"val3"
								}
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