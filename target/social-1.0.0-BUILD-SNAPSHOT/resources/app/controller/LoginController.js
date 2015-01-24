Ext.define('SpringExtjsDemo.controller.LoginController', {
	extend: 'Ext.app.Controller',
	
	views: ['Login'],
	
	init:function(application) {
		this.control({
			'login form toolbar button#submit': {
				click: 'buttonSubmit'
			},
			'login form toolbar button#cancel': {
				click: this.buttonCancel
			}
		});
	},
	
	buttonSubmit : function(button, e, options) {
		console.log('submit button');
		var formPanel = button.up('form');
		var login = button.up('login');
		var username = formPanel.down('textfield[name=user]').getValue();
		var password = formPanel.down('textfield[name=password]').getValue();
		
		if(formPanel.getForm().isValid()) {
			Ext.Ajax.request({
				url: 'login/authentication',
				method: 'POST',
				params: {
					user: username,
					password: password
				},
				success: function(conn, response, options, eOpts) {
					var result = Ext.JSON.decode(conn.responseText, true);
					if(result.success) {
						Ext.Msg.show({
							title: 'Success Message',
							msg: result.msg,
							icon: Ext.Msg.OK
						})
					} else {
						Ext.Msg.show({
							title: 'Failed Message',
							msg: result.msg,
							icon: Ext.Msg.OK
						})
					}
					
				}, 
				failure: function(conn, response, options, eOpts) {
					Ext.Msg.show({
						title: 'Error Message',
						msg: conn.responseText,
						icon: Ext.Msg.ERROR,
						button: Ext.Msg.OK
					})
				}
			})
		};
	},
	
	buttonCancel : function(button, e, options) {
		console.log('cancel button');
	}
	
});