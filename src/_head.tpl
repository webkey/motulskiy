<!DOCTYPE html>
<!--[if lt IE 9]>      <html class="no-js old-ie" lang="ru"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie9" lang="ru"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="ru"> <!--<![endif]-->
<head>
	<meta charset="UTF-8">
	<title>@@title</title>
	<!--Theme color-->
	<meta name="theme-color" content="#019875">
	<!--Viewport-->
	<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />
	<script>
		(function(doc) {
			var viewport = document.getElementById('viewport');
			if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i)) {
				viewport.setAttribute("content", "width=768, maximum-scale=1.2");
			} else if ( navigator.userAgent.match(/iPad/i) ) {
				viewport.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1");
			}
		}(document));
	</script>
	<!--The Open Graph protocol-->
	<meta property="og:url" content="">
	<meta property="og:title" content="">
	<meta property="og:image" content="">
	<meta property="og:description" content="">
	<meta property="og:site_name" content="">
	<!--Favicon-->
	<link href="favicon.ico" rel="shortcut icon">
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<!--Style-->
	<link rel="stylesheet" href="css/libs.min.css">
	<link rel="stylesheet" href="css/main.css">
	<!--Modernizr-->
	<script src="js/modernizr.min.js"></script>
</head>
<body @@if (pageClass !== "") {class="@@pageClass"}>
<!--[if lt IE 9]> <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p> <![endif]-->
<!-- >>> head.tpl END <<< -->