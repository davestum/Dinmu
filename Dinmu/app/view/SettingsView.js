/*
 * File: app/view/SettingsView.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Dinmu.view.SettingsView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.settingsview',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                instructions: 'In case you do not want the app to detect your location you can enter the city and country.',
                title: 'SettingsView',
                items: [
                    {
                        xtype: 'togglefield',
                        label: 'Auto Detect?',
                        labelWidth: '55%',
                        name: 'geo',
                        value: 1
                    },
                    {
                        xtype: 'selectfield',
                        disabled: true,
                        label: 'Units',
                        name: 'units',
                        options: [
                            {
                                text: 'Fahrenheit',
                                value: 'f'
                            },
                            {
                                text: 'Celsius',
                                value: 'c'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        label: 'City',
                        name: 'city'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        label: 'Country',
                        name: 'country'
                    },
                    {
                        xtype: 'button',
                        action: 'refresh',
                        margin: '10 5',
                        ui: 'confirm',
                        text: 'Refresh'
                    }
                ]
            }
        ]
    }

});