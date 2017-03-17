<li class="has-drop@@if (mainNavItem === mainNavItemActive) { current}">
	<a href="@@mainNavItem.html"><span>@@mainNavItemText</span></a>

	@@if (typeof context.arr === "object" ) {
	<ul class="nav-drop">
		@@for (var key in arr) {
			<li>
				@@if (typeof context.cond === "object" ) {
					<b class="cond_key">@@cond.index</b>
					<b class="current_key">`+key+`</b>
					<div>@@if (`+arr[key]+` !== "val_l2") {
						<span>`+key+`</span><i>`+arr[key]+`</i>
						}</div>
				}
			</li>
		}
		<li>
			<ul>
				@@if (typeof context.cond === "object" ) {
					@@for (var key in cond.drop) {
						<li>
							<span>`+key+`</span><i>`+cond.drop[key]+`</i>
						</li>
					}
				}
			</ul>
		</li>

	</ul>
	}
</li>