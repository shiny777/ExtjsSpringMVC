Ext.define('SpringExtjsDemo.view.Login', {
	extend: 'Ext.window.Window',
	alias: 'widget.login',
	
	autoShow: true,
	height: 210,
	width: 400,
	resizable: false,
	layout: {
		type: 'fit'
	},
	title: 'Login Form',
	closeAction: 'hide',
	closable: false,
	items: [{
		xtype: 'form',
		frame: false,
		bodyPadding: 15,
		defaults: {
			xtype: 'textfield',
			anchor: '100%',
			labelWidth: 60,
			allowBlank: false,
			vtype: 'alphanum',
			minLength: 4,
			maxLength: 30
		},
		items: [{
			name: 'user',
			fieldLabel: 'Username',
			itemId: 'user',
			maxLength: 20,
			msgTarget: 'under'
		}, 
		{
			name: 'password',
			fieldLabel: 'Password',
			itemId: 'password',
			inputType: 'password',
			maxLength: 12,
			msgTarget: 'under'
		}],
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			items: [{
				xtype: 'tbfill'
			},
			{
				xtype: 'button',
				itemId:'cancel',
				text: 'Cancel'
			},
			{
				xtype: 'button',
				itemId: 'submit',
				text: 'Submit',
				formBind: true
			}]
		}]
	}]
	
});