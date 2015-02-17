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
  - ``` <customcasefield customfield='Variant.Specs.Phone' case='upper'></customcasefield>```
