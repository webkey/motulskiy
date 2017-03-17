<!-- @@if(mainNavItemActive === "biography"){ current} -->
<!-- @@if(mainNavItemActive === "biography"){ class="current"} -->
<nav class="nav">
	<ul class="nav__list">
		<li class="has-drop@@if(mainNavItemActive === "Биография"){ current}">
			@@include('_nav-LINK.tpl', { "itemText": "Биография", "itemLink": "biography.html", "specialValue": "" })
			@@include('_nav-drop-wrap-1_ONE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Реквизиты", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Предыдущие должности", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Образование", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Участие в работе коллегиальных органов управления, научных и общественных организаций", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Участие в международных симпозиумах, конференциях, семинарах и других мероприятиях", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Награды и поощрения", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-1_ONE.tpl', { "end": "1"})
		</li>
		<li class="has-drop@@if(mainNavItemActive === "Фотоальбом"){ current}">
			@@include('_nav-LINK.tpl', { "itemText": "Фотоальбом", "itemLink": "photos.html", "specialValue": "" })
			@@include('_nav-drop-wrap-1_ONE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Научная деятельность", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-2_TWO.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Защита докторской диссертации", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Презентации научных трудов", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Участие в научных мероприятиях", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-2_TWO.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Социокультурная деятельность", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-2_TWO.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Культурно-просветительские акции и презентации", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Художественные выставки и проекты", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Торжественные мероприятия, церемонии награждения", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-2_TWO.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Общественная деятельность", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-2_TWO.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Приём делегаций", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Собрания, совещания и заседания", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-2_TWO.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Международная деятельность", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-2_TWO.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Приём зарубежных делегаций", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Подписание соглашений, договоров", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Зарубежные визиты", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-2_TWO.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Учебно-педагогическая деятельность", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Досуг", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-1_ONE.tpl', { "end": "1"})
		</li>
		<li class="has-drop@@if(mainNavItemActive === "Видео"){ current}">
			@@include('_nav-LINK.tpl', { "itemText": "Видео", "itemLink": "404.html", "specialValue": "" })
		</li>
		<li class="has-drop@@if(mainNavItemActive === "Публикации"){ current}">
			@@include('_nav-LINK.tpl', { "itemText": "Публикации", "itemLink": "404.html", "specialValue": "" })
			@@include('_nav-drop-wrap-1_ONE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Хронологический список", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Р.С. Мотульский в документальных и публицистических фильмах и телепередачах", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-1_ONE.tpl', { "end": "1"})
		</li>
		<li class="has-drop@@if(mainNavItemActive === "Труды"){ current}">
			@@include('_nav-LINK.tpl', { "itemText": "Труды", "itemLink": "404.html", "specialValue": "" })
			@@include('_nav-drop-wrap-1_ONE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Тематический список", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-2_TWO.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Библиотековедение. Общая теория", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-3_THREE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Самостоятельные издания", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Статьи", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-3_THREE.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "История библиотечного дела", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-3_THREE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Самостоятельные издания", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Статьи", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-3_THREE.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Система библиотек Республики Беларусь", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Национальная библиотека Беларуси", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-3_THREE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Самостоятельные издания", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Статьи", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-3_THREE.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Библиотечное дело в зарубежных странах", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-3_THREE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Самостоятельные издания", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Статьи", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-3_THREE.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Библиотечно-информационный менеджмент и маркетинг", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-3_THREE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Самостоятельные издания", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Статьи", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-3_THREE.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Библиотечно-информационное образование", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-3_THREE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Самостоятельные издания", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Статьи", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-3_THREE.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Учебно-методические пособия", "itemLink": "#", "specialValue": "" })
			@@include('_nav-drop-wrap-3_THREE.tpl', { "start": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Учебники и учебные пособия", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Методические материалы", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-3_THREE.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Р.С. Мотульский – составитель, редактор, член редколлегии, рецензент, научный руководитель, автор идеи", "itemLink": "#", "specialValue": "" })</li>
		<li>@@include('_nav-LINK.tpl', { "itemText": "Интервью с Р.С. Мотульским", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-2_TWO.tpl', { "end": "1"})
		<li>@@include('_nav-LINK.tpl', { "itemText": "Хронологический список", "itemLink": "#", "specialValue": "" })</li>
			@@include('_nav-drop-wrap-1_ONE.tpl', { "end": "1"})
		</li>
		<li class="has-drop@@if(mainNavItemActive === "Ссылки"){ current}">
			@@include('_nav-LINK.tpl', { "itemText": "Ссылки", "itemLink": "404.html", "specialValue": "" })
		</li>
		<li class="has-drop@@if(mainNavItemActive === "Блог"){ current}">
			@@include('_nav-LINK.tpl', { "itemText": "Блог", "itemLink": "blog.html", "specialValue": "" })
		</li>
	</ul>
</nav>