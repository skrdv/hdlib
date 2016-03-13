Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
    extraSignupFields: [
        {
            fieldName: 'first-name',
            fieldLabel: 'First name',
            inputType: 'text',
            visible: true,
            saveToProfile: true,
            validate: function(value, errorFunction) {
                if (value.trim() == '') {
                    errorFunction('First name cannot be blank');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            fieldName: 'last-name',
            fieldLabel: 'Last name',
            inputType: 'text',
            visible: true,
            saveToProfile: true
        },
        {
            fieldName: 'checkbox',
            fieldLabel: 'Default checkbox with no JS',
            inputType: 'checkbox',
            visible: true,
            saveToProfile: false
        },
        {
            fieldName: 'checkbox-js',
            fieldLabel: 'Default checkbox with JS',
            inputType: 'checkbox',
            visible: true,
            saveToProfile: false,
            useJS: true
        },
        {
            fieldName: 'checkbox-slider-js',
            fieldLabel: 'Slider checkbox with JS',
            inputType: 'checkbox',
            visible: true,
            saveToProfile: false,
            fieldClasses: 'slider',
            useJS: true
        },
        {
            fieldName: 'checkbox-toggle-js',
            fieldLabel: 'Toggle checkbox with JS',
            inputType: 'checkbox',
            visible: true,
            saveToProfile: false,
            fieldClasses: 'toggle',
            useJS: true
        },
    ]
});
