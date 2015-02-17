#Spec Form Directives for OrderCloud 2.0

This is a repository of useful AngularJS directive for OrderCloud 2.0 spec forms and product detail templates. Several already are included in the OrderCloud Storefront reference app. 

## Getting Started

- Include the file: ordercloud-specforms.js in your repository.  We recommend the "lib" folder, but you can place it anywhere inside the "app" folder you wish. 
- Reference the new script file in your index.html file. Be careful to identify the path/location correctly.
- Inject the module into your app.module function. Remember the name of the module is "OrderCloud-SpecForms"

# Directives

## custommaskfield

A directive that allows for masking input for variable specs. The key difference between this directive and the angular directive "ui-mask" is that the value will include the mask chars. 

- Properties
  - customfield: Required property. Specify the variable spec
  - mask: Required property. Specify the mask signature. Ex: 999-***-aaa
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <custommaskfield customfield='Variant.Specs.Phone' mask='999.999.9999 x999'></custommaskfield>```
- Notes
  - The plugin is an angular implementation of the Masked Input plugin for jQuery @ http://digitalbush.com/projects/masked-input-plugin/#license
  
## customcasefield

A directive that enforces case specified for variable specs.  

- Properties
  - customfield: Required property. Specify the variable spec
  - case: Required property. Specify the case to enforce. Options: 'upper', 'lower'
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <customcasefield customfield='Variant.Specs.Name' case='upper'></customcasefield>```

# Custom directives included in the OrderCloud Storefront reference app

## customtextfield

A directive for generic text input. When the variable spec property contains mutliple lines a textarea element is added to the DOM rather than a one line text input control.

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <customtextfield customfield='Variant.Specs.Title'></customtextfield>```

## customselectionfield

A directive for select lists. The result is a dropdown control that contain all the options defined in the spec properties. This directive also accomodates the "Other" option functionality. 

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <customselectionfield customfield='Variant.Specs.Options'></customselectionfield>```

## customfilefield

A directive to the HTML5 File Upload control with Variable Specs. This directive utilizes the HTML5 File API to upload the content chosen in the proper format to the API. It also exposes the delete and replace functionality. It is only compatible with IE10+ and all evergreen browsers. IE9 does not support the HTML5 File API.

- Properties
  - customfield: Required property. Specify the variable spec
- Example usage
  - ``` <customfilefield customfield='Variant.Specs.Photo'></customfilefield>```

## customdatefield

A directive to provide a calendar control for date selection. The spec must be a text type for this to work properly.  

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <customdatefield customfield='Variant.Specs.StartDate'></customdatefield>```

## customtimefield

A directive to utilize the Angular Bootstrap [http://angular-ui.github.io/bootstrap/#/timepicker] timepicker directive for time of day selection in conjunction with the Spec. The spec must be a text type for this to work properly. The value is converted to an ISO string for compatibility with the API.

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <customtimefield customfield='Variant.Specs.StartTime'></customtimefield>```

## customcheckboxfield

A directive to expose a checkbox control and apply the defined value to the Spec. 

- Properties
  - customfield: Required property. Specify the variable spec
  - checked: The value assigned to the spec when the control state is checked
  - unchecked: The value assigned to the spec when the control state is not checked
  
- Example usage
  - ``` <customcheckboxfield customfield='Variant.Specs.Approved' checked='Yes' unchecked='No'></customcheckboxfield>```

## customphonefield

A directive to display a masked phone input in conjunction with 3 specs that define a phone number. You must specify the 3 specs that make up your phone number elements. 

- Properties
  - spec1: Required property. Specify the variable spec
  - spec2: Required property. Specify the variable spec
  - spec3: Required property. Specify the variable spec
  - label: The display label inserted next to the custom element
  - mask: The mask to inform user input
  
- Example usage
  - ``` <customphonefield spec1='Variant.Specs.AreaCode' spec2='Variant.Specs.Prefix' spec3='Variant.Specs.Number' label='Your Number:' mask='999.999.9999'></customphonefield>```
