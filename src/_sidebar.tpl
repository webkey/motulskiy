<aside class="sidebar">
	<div class="sidebar__holder">
		<!--menu-->
		<div class="menu">
			<ul class="menu__list">
				@@loop('_menu-items.tpl', [
					{
						"menuItem": "about",
						"menuItemText": "About",
						"menuItemActive": "@@menuItemActive"
					},{
						"menuItem": "news",
						"menuItemText": "News",
						"menuItemActive": "@@menuItemActive"
					},{
						"menuItem": "contact",
						"menuItemText": "Contact",
						"menuItemActive": "@@menuItemActive"
					},{
						"menuItem": "photos",
						"menuItemText": "Photos",
						"menuItemActive": "@@menuItemActive"
					},{
						"menuItem": "faq",
						"menuItemText": "FAQ",
						"menuItemActive": "@@menuItemActive"
					}
				])
			</ul>
		</div>
		<!--menu end-->
		<div class="sidebar__widget">
			<h3>Title of Sidebar Widget</h3>
			Content of Sidebar Widget
		</div>
		<div class="sidebar__widget">
			<h3>Title of Sidebar Widget</h3>
			Content of Sidebar Widget
		</div>
	</div>
</aside>