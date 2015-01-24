Ext.application({
	name : 'SpringExtjsDemo',
	requires: ['SpringExtjsDemo.*'],
	controllers: ['LoginController'],

	launch : function() {
		var splashscreen = Ext.getBody().mask('Loading application',
				'splashscreen'), task = new Ext.util.DelayedTask(function() {
			splashscreen.fadeOut({
				opacity : .5,
				duration : 1000,
				remove : true,
				listeners: {
					afteranimate: function(el, startTime, eOpts) {
						Ext.create('SpringExtjsDemo.view.Login').show();
					}
				}
			});
		});
		
		task.delay(1000);

		console.log('launch...');
	},

	init : function() {

		console.log('init...');
	}
});