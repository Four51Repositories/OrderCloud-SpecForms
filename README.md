#Spec Form Directives for OrderCloud 2.0

This is a repository of useful AngularJS directive for OrderCloud 2.0 spec forms and product detail templates. Several already are included in the OrderCloud Storefront reference app. 

## Getting Started

- Include the file: ordercloud-specforms.js in your repository.  We recommend the "lib" folder, but you can place it anywhere inside the "app" folder you wish. 
- Reference the new script file in your index.html file. Be careful to identify the path/location correctly.
- Inject the module into your app.module function. Remember the name of the module is "OrderCloud-SpecForms"
- If you will be using the CKEDITOR you need to include one more file in your index file like so:
```html
<script src="//cdn.ckeditor.com/4.4.7/basic/ckeditor.js" data-group="cdn"></script>
```

# Directives

## ocmmaskfield

A directive that allows for masking input for variable specs. The key difference between this directive and the angular directive "ui-mask" is that the value will include the mask characters. 

- Properties
  - customfield: Required property. Specify the variable spec
  - mask: Required property. Specify the mask signature. Ex: 999-***-aaa
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <ocmaskfield customfield='Variant.Specs.Phone' mask='999.999.9999 x999'></ocmaskfield>```
- Notes
  - The plugin is an angular implementation of the Masked Input plugin for jQuery @ http://digitalbush.com/projects/masked-input-plugin/#license
  
## occasefield

A directive that enforces case specified for variable specs.  

- Properties
  - customfield: Required property. Specify the variable spec
  - case: Required property. Specify the case to enforce. Options: 'upper', 'lower'
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <occasefield customfield='Variant.Specs.Name' case='upper'></occasefield>```

## octextfield

A directive for generic text input. When the variable spec property contains multiple lines a textarea element is added to the DOM rather than a one line text input control. If the field has a mask value, such as for Custom Order Fields and Custom User Fields, the value will include the mask characters. 

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <octextfield customfield='Variant.Specs.Title'></octextfield>```

## ocselectionfield

A directive for select lists. The result is a dropdown control that contain all the options defined in the spec properties. This directive also accommodates the "Other" option functionality. 

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <ocselectionfield customfield='Variant.Specs.Options'></ocselectionfield>```

## ocfilefield

A directive to the HTML5 File Upload control with Variable Specs. This directive utilizes the HTML5 File API to upload the content chosen in the proper format to the API. It also exposes the delete and replace functionality. It is only compatible with IE10+ and all evergreen browsers. IE9 does not support the HTML5 File API.

- Properties
  - customfield: Required property. Specify the variable spec
- Example usage
  - ``` <ocfilefield customfield='Variant.Specs.Photo'></ocfilefield>```

## ocdatefield

A directive to provide a calendar control for date selection. The spec must be a text type for this to work properly.  

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
  - format: The format for displayed dates. Defaults to 'MM/dd/yyyy'
- Example usage
  - ``` <ocdatefield customfield='Variant.Specs.StartDate' format='dd-MM-yyyy'></ocdatefield>```

## octimefield

A directive to utilize the Angular Bootstrap [http://angular-ui.github.io/bootstrap/#/timepicker] timepicker directive for time of day selection in conjunction with the Spec. The spec must be a text type for this to work properly. The value is converted to an ISO string for compatibility with the API.

- Properties
  - customfield: Required property. Specify the variable spec
  - hideprefix: Boolean value. If set to "false" will hide the prefix label
  - hidesuffix: Boolean value. If set to "false" will hide the suffix label
- Example usage
  - ``` <octimefield customfield='Variant.Specs.StartTime'></octimefield>```

## occheckboxfield

A directive to expose a checkbox control and apply the defined value to the Spec. 

- Properties
  - customfield: Required property. Specify the variable spec
  - checked: The value assigned to the spec when the control state is checked
  - unchecked: The value assigned to the spec when the control state is not checked
  
- Example usage
  - ``` <occheckboxfield customfield='Variant.Specs.Approved' checked='Yes' unchecked='No'></occheckboxfield>```
