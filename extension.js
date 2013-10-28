exports.onload = function(app) {

    helper.template('opencomb/templates/WebPage.html',this.hold(function(err,tpl){

	if(err){
	    helper.log.error(err) ;
	    throw err ;
	}


	// 加入 bootstrap css
	tpl.$("html head assets[type=css]").before(
	    '<link type="text/css" href="/oc-ext-bootstrap/public/css/bootstrap.css">'
	) ;
	// 加入 bootstrap js
	tpl.$("html body assets[type=script]").before(
	    '<script type="text/javascript" src="/oc-ext-bootstrap/public/js/bootstrap.js"></script>'
	) ;

	// 从新编译
	tpl.compile() ;

    })) ;

}
