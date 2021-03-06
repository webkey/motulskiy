'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	browserSync = require('browser-sync').create(), // Подключаем Browser Sync
	reload = browserSync.reload,
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления префиксов
	sourcemaps = require('gulp-sourcemaps'), // Подключаем Source Map для дебагинга sass-файлов https://github.com/floridoo/gulp-sourcemaps
	fileinclude = require('gulp-file-include'),
	markdown = require('markdown'),
	htmlbeautify = require('gulp-html-beautify'), // Причесываем
	fs = require('fs'), // For compiling modernizr.min.js
	modernizr = require('modernizr'), // For compiling modernizr.min.js
	config = require('./modernizr-config'), // Path to modernizr-config.json
	pathRename = require('gulp-string-replace') //Replace strings in files by using string or regex patterns
;

gulp.task('htmlCompilation', function () { // Таск формирования ДОМ страниц
	return gulp.src(['src/__*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
			context: {
				name: 'example'
			},
			filters: {
				markdown: markdown.parse
			}
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.substr(2);
		}))
		.pipe(htmlbeautify({
			"indent_with_tabs": true
		}))
		.pipe(gulp.dest('./src/'));
});

gulp.task('sassCompilation', function () { // Создаем таск для компиляции sass файлов
	// return gulp.src('src/sass/**/*.+(scss|sass)') // Берем источник
	return gulp.src('src/sass/main.sass') // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded', // nested (default), expanded, compact, compressed
			indentType: 'tab',
			indentWidth: 1
		}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer([
			'last 5 versions', '> 1%' //, 'ie 8', 'ie 7'
		], {
			cascade: false
		})) // Создаем префиксы
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./src/css')) // Выгружаем результата в папку src/css
		.pipe(browserSync.reload({
			stream: true
		})); // Обновляем CSS на странице при изменении
});

gulp.task( 'createCustomModernizr', function (done) { // Таск для формирования кастомного modernizr
	modernizr.build(config, function(code) {
		fs.writeFile('src/js/modernizr.min.js', code, done);
	});
});

gulp.task('mergeCssLibs', function () { // Таск для мержа css библиотек
	return gulp.src([
		'src/css/temp/*.css' // see gulpfile-special.js
		, 'src/libs/swiper/dist/css/swiper.min.css'
		// ,'src/lib/plugin/file.css'
	]) // Выбираем файлы для конкатенации
		.pipe(concatCss("src/css/libs.css", {
			rebaseUrls: false
		}))
		.pipe(gulp.dest('./')) // Выгружаем в папку src/css несжатую версию
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('./')); // Выгружаем в папку src/css сжатую версию
});

gulp.task('copyLibsScriptsToJs', ['copyJqueryToJs'], function () { // Таск для мераж js библиотек
	return gulp.src([
		'src/libs/device.js/lib/device.min.js',
		'src/libs/jquery-smartresize/jquery.debouncedresize.js',
		'src/libs/jquery-placeholder/jquery.placeholder.min.js',
		'src/libs/swiper/dist/js/swiper.min.js',
		'src/libs/gsap/src/minified/TweenMax.min.js',
		'src/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js'
	])
		.pipe(concat('libs.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(gulp.dest('src/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
});

gulp.task('copyJqueryToJs', function () { // Таск для копирования jquery в js папку
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
		.pipe(gulp.dest('src/js'));
});

gulp.task('browserSync', function (done) { // Таск browserSync
	browserSync.init({
		server: {
			baseDir: "./src"
		},
		notify: false // Отключаем уведомления
	});
	browserSync.watch(['src/*.html', 'src/js/**/*.js', 'src/includes-json/**/*.json']).on("change", browserSync.reload);
	done();
});

gulp.task('watch', ['createCustomModernizr', 'browserSync', 'htmlCompilation', 'sassCompilation', 'mergeCssLibs', 'copyLibsScriptsToJs'], function () {
	gulp.watch(['src/*.tpl', 'src/__*.html', 'src/includes-json/**/*.json'], ['htmlCompilation']); // Наблюдение за tpl
	// файлами в папке include
	gulp.watch('src/sass/**/*.+(scss|sass)', ['sassCompilation']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']); // Назначаем таск watch дефолтным

/************************************************************
 * Create Distribution folder and move files to it
 ************************************************************/

gulp.task('copyImgToDist', function () {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			optimizationLevel: 7, //степень сжатия от 0 до 7
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['cleanDistFolder', 'htmlCompilation', 'copyImgToDist', 'sassCompilation', 'mergeCssLibs', 'createCustomModernizr', 'copyLibsScriptsToJs'], function () {

	gulp.src([ // Переносим css в продакшен
		'src/css/main.css',
		'src/css/libs.min.css'
	])
		.pipe(gulp.dest('dist/css'));

	gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'));

	gulp.src(['src/js/**/*.min.js', 'src/js/common.js']) // Переносим скрипты в продакшен
		.pipe(gulp.dest('dist/js'));

	gulp.src(['!src/__*.html', 'src/*.html']) // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));

	gulp.src(['src/*.png', 'src/*.ico', 'src/.htaccess']) // Переносим favicon и др. файлы в продакшин
		.pipe(gulp.dest('dist'));

});

gulp.task('cleanDistFolder', function () {
	return del.sync(['dist/']); // Удаляем папку dist
});

gulp.task('clearCache', function () { // Создаем такс для очистки кэша
	return cache.clearAll();
});