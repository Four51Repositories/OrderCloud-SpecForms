angular.module('OrderCloud-SpecForms', []);

angular.module('OrderCloud-SpecForms')
    .directive('ocmaskfield', ocmaskfield)
    .directive('mask', ocmask)
    .directive('occasefield', occasefield)
    .directive('octextfield', octextfield)
    .directive('ocselectionfield', ocselectionfield)
    .directive('ocfilefield', ocfilefield)
    .directive('ocdatefield', ocdatefield)
    .directive('octimefield', octimefield)
    .directive('occheckboxfield', occheckboxfield)
;

function ocmaskfield() {
    var directive = {
        scope: {
            customfield : '=',
            changed: '=',
            hidesuffix: '@',
            hideprefix: '@',
            mask: '@'
        },
        restrict: 'E',
        template: template
    };
    return directive;

    function template() {
        return [
            '<div class="view-form-icon" ng-class="{\'view-form-icon-input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                '<div ng-if="customfield.Lines <= 1">',
                    '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                    '<div ng-class="{\'input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                        '<span class="input-group-addon" ng-if="customfield.Prefix && !hideprefix && !((customfield.Prefix) == \'\')">{{customfield.Prefix}}</span>',
                        '<input class="form-control" size="{{customfield.Width * .13}}" ng-maxlength="{{customfield.MaxLength}}" mask="{{customfield.MaskedInput || mask}}" type="text" autocomplete="off" ng-required="{{customfield.Required}}" ng-model="customfield.Value"></input>',
                        '<span class="input-group-addon" ng-if="customfield.Suffix && !hidesuffix && !((customfield.Suffix) == \'\')">{{customfield.Suffix}}</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');
    }
}

function ocmask() {
    var directive = {
        restrict: 'A',
        link: link
    };
    return directive;

    function link(scope, elem, attr, ctrl) {
        if (attr.mask)
            elem.mask(attr.mask, { placeholder: attr.maskPlaceholder });
    }
}

function occasefield() {
    var directive = {
        scope: {
            customfield : '=',
            changed: '=',
            hidesuffix: '@',
            hideprefix: '@',
            case: '@'
        },
        restrict: 'E',
        template: template,
        controller: OCCaseFieldCtrl
    };
    return directive;

    function template() {
        return [
            '<div class="view-form-icon" ng-class="{\'view-form-icon-input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                '<div>',
                    '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                    '<div ng-class="{\'input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                        '<span class="input-group-addon" ng-if="customfield.Prefix && !hideprefix && !((customfield.Prefix) == \'\')">{{customfield.Prefix}}</span>',
                        '<input class="form-control" size="{{customfield.Width * .13}}" ng-maxlength="{{customfield.MaxLength}}" ui-mask="{{customfield.MaskedInput}}" type="text" autocomplete="off" ng-required="{{customfield.Required}}" ng-model="customfield.Value"></input>',
                        '<span class="input-group-addon" ng-if="customfield.Suffix && !hidesuffix && !((customfield.Suffix) == \'\')">{{customfield.Suffix}}</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');
    }

    OCCaseFieldCtrl.$inject = ['$scope'];
    function OCCaseFieldCtrl($scope) {
        $scope.$watch('customfield.Value', function(val) {
            if (!val) return;
            $scope.customfield.Value =  val[$scope.case == 'upper' ? 'toUpperCase' : 'toLowerCase']();
        });
    }
}

function octextfield() {
    var directive = {
        scope: {
            customfield : '=',
            changed: '=',
            hidesuffix: '@',
            hideprefix: '@'
        },
        restrict: 'E',
        transclude: true,
        template: template
    };
    return directive;

    function template() {
        return [
            '<div class="view-form-icon" ng-class="{\'view-form-icon-input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                '<div ng-if="customfield.Lines <= 1">',
                    '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                    '<div ng-class="{\'input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                        '<span class="input-group-addon" ng-if="customfield.Prefix && !hideprefix && !((customfield.Prefix) == \'\')">{{customfield.Prefix}}</span>',
                        '<input class="form-control" placeholder="{{customfield.Label || customfield.Name}}" size="{{customfield.Width * .13}}" ng-maxlength="{{customfield.MaxLength}}" ocmask="{{customfield.MaskedInput}}" type="text" autocomplete="off" ng-required="{{customfield.Required}}" ng-model="customfield.Value"></input>',
                        '<span class="input-group-addon" ng-if="customfield.Suffix && !hidesuffix && !((customfield.Suffix) == \'\')">{{customfield.Suffix}}</span>',
                    '</div>',
                '</div>',
                '<div ng-if="customfield.Lines > 1">',
                    '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                    '<div ng-class="{\'input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                        '<span class="input-group-addon" ng-if="customfield.Prefix && !hideprefix && !((customfield.Prefix) == \'\')">{{customfield.Prefix}}</span>',
                        '<textarea class="form-control"  ng-attr-placeholder="{{customfield.Label || customfield.Name}}" cols="{{customfield.Width * .13}}" rows="{{customfield.Lines}}" ng-maxlength="{{customfield.MaxLength}}" ng-required="{{customfield.Required}}" ng-model="customfield.Value"></textarea>',
                        '<span class="input-group-addon" ng-if="customfield.Suffix && !hidesuffix && !((customfield.Suffix) == \'\')">{{customfield.Suffix}}</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');
    }
}

ocselectionfield.$inject = ['$451'];
function ocselectionfield($451) {
    var directive = {
        scope: {
            customfield : '=',
            change: '=',
            hidesuffix: '@',
            hideprefix: '@'
        },
        restrict: 'E',
        transclude: true,
        template: template,
        link: OCSelectionFieldLink
    };
    return directive;

    function template() {
        return [
            '<div class="view-form-icon" ng-class="{\'view-form-icon-input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                '<div>',
                    '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                    '<div ng-class="{\'input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                        '<span class="input-group-addon"  ng-if="customfield.Prefix && !hideprefix && !((customfield.Prefix) == \'\')">{{customfield.Prefix}}</span>',
                        '<select class="form-control" ng-init="init()" ng-required="customfield.Required" ng-change="changed()" ng-model="item" ng-options="option.Value for option in customfield.Options" ng-if="customfield.Options">',
                            '<option value=""></option></select>',
                        '<input class="form-control" type="text" ng-change="otherChanged()" ng-model="other" ng-show="customfield.isOtherSelected" autocomplete="off" ng-required="customfield.Required && customfield.isOtherSelected" />',
                        '<span class="input-group-addon"  ng-if="customfield.Suffix && !hidesuffix && !((customfield.Suffix) == \'\')">{{customfield.Suffix}}</span>',
                    '</div>',
                    '<i class="fa fa-edit"></i>',
                '</div>',
            '</div>'
        ].join('');
    }

    function OCSelectionFieldLink(scope, element, attr) {
        scope.changed = function() {
            //reset values
            scope.customfield.isOtherSelected = false;
            angular.forEach(scope.customfield.Options, function(opt) {
                opt.Selected = false;
            });
            // end reset
            scope.customfield.Value = this.item == null ? null : this.item.Value;
            scope.customfield.SelectedOptionID = this.item == null ? null : this.item.ID;
            if (this.item != null) this.item.Selected = true;

            if (this.item != null && this.item.Value.indexOf('Other') > -1 && this.item.ID.indexOf('_other') > -1) {
                scope.customfield.isOtherSelected = true;
                this.item.Selected = true;
                scope.customfield.SelectedOptionID = this.item.ID;
                scope.customfield.Value = scope.other;
            }
            if (scope.change)
                scope.change(scope.customfield);
        };
        scope.otherChanged = function() {
            scope.customfield.isOtherSelected = true;
            scope.customfield.Value = scope.other;
            if (scope.change)
                scope.change(scope.customfield);
        };
        scope.item = {}, scope.other = ''; // initialize the item variable to avoid checking for null

        scope.init = function() {
            var id = scope.customfield.Value != null ? scope.customfield.Options[scope.customfield.Options.length-1].ID : scope.customfield.DefaultOptionID;
            var matched = false;
            angular.forEach(scope.customfield.Options, function(n,i) {
                if (matched) return;
                if (scope.customfield.Value == n.Value) {
                    id = n.ID;
                    matched = true;
                }
                if  (scope.customfield.Value == null) {
                    id = scope.customfield.DefaultOptionID;
                    if (id != null) scope.customfield.Value = $451.filter(scope.customfield.Options, { 'Property': 'ID', 'Value': id })[0].Value;
                    matched = true;
                }
            });
            this.item = scope.customfield.Value != null ? $451.filter(scope.customfield.Options, { 'Property': 'ID', 'Value': id })[0] : null;
            if (this.item && this.item.Value == 'Other') {
                scope.other = scope.customfield.Value;
                this.otherChanged();
            }
        };
    }
}

ocfilefield.$inject = ['$parse', '$resource', '$451', 'fileReader', 'Security'];
function ocfilefield($parse, $resource, $451, fileReader, Security) {
    var directive = {
        scope: {
            customfield: '=',
            replace: '@ngModel'
        },
        restrict: 'E',
        template: template,
        replace: true,
        link: OCFileFieldLink
    };
    return directive;

    function template() {
        return [
            '<div class="view-form-icon">',
                '<div class="fileInput">',
                    '<loadingindicator ng-show="uploadFileIndicator" title="Uploading"/>',
                    '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                    '<img ng-show="customfield.File.IsImage && customfield.FileType == \'Image\'" ng-src="{{customfield.File.Url}}"></img>',
                    '<a ng-href="{{customfield.File.Url}}">{{customfield.File.OriginalName}}</a>',
                    '<div ng-show="customfield.File">',
                        '<input name="replace" class="replace" type="checkbox" ng-model="replace"></input> Replace',
                        '<input name="delete" class="delete" type="checkbox"></input> Delete',
                    '</div>',
                    '<div ng-show="replace || !customfield.File" ng-class="{\'file-upload-required text-danger\': customfield.Required }" class="btn btn-default">',
                        '<i class="fa fa-upload"></i> Upload File',
                        '<input name="upload" class="upload" type="file"></input>',
                    '</div>',
                    '<hr />',
                    '<input type="hidden" ng-required="customfield.Required" ng-model="customfield.File.ID"></input>',
                    '<div class="error ui-state-error-text text-danger"></div>',
                    '<div class="alert alert-info" ng-show="replace || !customfield.File">',
                        '{{customfield.UploadInstructions}}',
                        '<ul ng-show="replace || !customfield.File">',
                            '<li>Allowed File Types: {{customfield.AllowedExt}}</li>',
                            '<li ng-if="customfield.MinSize > 0">Minimum File Size: {{customfield.MinSize}}</li>',
                            '<li ng-if="customfield.MaxSize > 0">Maximum File Size: {{customfield.MaxSize}}</li>',
                            '<li ng-if="customfield.MinHeight > 0 && (customfield.File.IsImage || customfield.FileType == \'Image\')">Minimum Height: {{customfield.MinHeight + \' px\'}}</li>',
                            '<li ng-if="customfield.MaxHeight > 0 && (customfield.File.IsImage || customfield.FileType == \'Image\')">Maximum Height: {{customfield.MaxHeight + \' px\'}}</li>',
                            '<li ng-if="customfield.MinWidth > 0 && (customfield.File.IsImage || customfield.FileType == \'Image\')">Minimum Width: {{customfield.MinWidth + \' px\'}}</li>',
                            '<li ng-if="customfield.MaxWidth > 0 && (customfield.File.IsImage || customfield.FileType == \'Image\')">Maximum Width: {{customfield.MaxWidth + \' px\'}}</li>',
                            '<li ng-if="customfield.MinDPI > 0 && (customfield.File.IsImage || customfield.FileType == \'Image\')">Minimum DPI: {{(customfield.MinDPI) + \' dpi\'}}</li>',
                            '<li ng-if="customfield.MaxDPI > 0 && (customfield.File.IsImage || customfield.FileType == \'Image\')">Maximum DPI: {{(customfield.MaxDPI) + \' dpi\'}}</li>',
                        '</ul>',
                    '</div>',
                '</div>',
            '</div>'

        ].join('');
    }

    function OCFileFieldLink(scope, element, attrs) {
        var cache = angular.copy(scope.customfield);
        var file_input = $parse("file");
        var replace_box = $('.replace', element)[0];
        var delete_box = $('.delete', element)[0];
        var file_control = $('.upload', element)[0];
        var error_element = $('.error', element)[0];

        var afterSelection = function(file) {
            scope.uploadFileIndicator = true;
            $resource($451.api('uploadfile')).save({ Data: file.result, Name: file_control.files[0].name, ID: scope.customfield.ID, SourceType: scope.customfield.SourceType, SourceID: scope.customfield.SourceID }).$promise.then(function(u) {
                u.Url += "&auth=" + Security.auth();
                scope.customfield.File = u;
                scope.customfield.Value = u.ID;
                scope.uploadFileIndicator = false;
            }).catch(function(ex) {
                error_element.innerHTML = (!ex.data.Message) ?
                    "An error occurred. Please select a new file and try again." :
                    ex.data.Message;
                scope.uploadFileIndicator = false;
            });
        };

        var reset = function() {
            scope.$apply(function() {
                scope.customfield = angular.copy(cache);
            });
        };

        var updateModel = function (event) {
            error_element.innerHTML = "";
            switch (event.target.name) {
                case "delete":
                    scope.replace = false;
                    if (event.target.checked) {
                        scope.$apply(function() {
                            scope.customfield.File = null;
                            scope.customfield.Value = null;
                            replace_box.checked = false;
                        });
                        break;
                    }
                    reset();
                    break;
                case "replace":
                    if (delete_box.checked) {
                        scope.customfield = cache;
                        reset();
                        delete_box.checked = false;
                    }
                    if (!event.target.checked && cache.Value) {
                        reset();
                    }
                    break;
                case "upload":
                    if (event.target.files[0] == null) return;
                    scope.$apply(function () {
                        fileReader.readAsDataUrl(event.target.files[0], scope)
                            .then(afterSelection);
                        file_input.assign(scope,  event.target.files[0]);
                    });
                    scope.replace = replace_box.checked = false;
                    scope.delete = delete_box.checked = false;
                    break;
            }
        };
        element.bind('change', updateModel);
    }
}

function ocdatefield() {
    var directive = {
        scope: {
            customfield : '=',
            hidesuffix: '@',
            hideprefix: '@',
            format: '@'
        },
        restrict: 'E',
        template: template
    };
    return directive;

    function template() {
        return [
            '<div class="view-form-icon">',
                '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                '<div ng-class="{\'input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                    '<span class="input-group-addon" ng-if="customfield.Prefix && !hideprefix && !((customfield.Prefix) == \'\')">{{customfield.Prefix}}</span>',
                    '<input datepicker-popup="{{format}}" class="form-control" type="text" ng-required="customfield.Required" ng-model="customfield.Value"/>',
                    '<span class="input-group-addon" ng-if="customfield.Suffix && !hidesuffix && !((customfield.Suffix) == \'\')">{{customfield.Suffix}}</span>',
                    '<i class="fa fa-calendar"></i>',
                '</div>',
            '</div>'
        ].join('');
    }
}

function octimefield() {
    var directive = {
        scope: {
            customfield : '=',
            hidesuffix: '@',
            hideprefix: '@'
        },
        restrict: 'E',
        template: template,
        controller: OCTimeFieldCtrl
    };
    return directive;

    function template() {
        return [
            '<div class="form-group">',
                '<label class="small" ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}</label>',
                '<div ng-class="{\'input-group\':((customfield.Prefix && !hideprefix) || (customfield.Suffix && !hidesuffix))}">',
                    '<span class="input-group-addon" ng-if="customfield.Prefix && !hideprefix && !((customfield.Prefix) == \'\')">{{customfield.Prefix}}</span>',
                    '<div ng-model="customfield.Value">',
                        '<timepicker show-meridian="true"></timepicker>',
                    '</div>',
                    '<span class="input-group-addon" ng-if="customfield.Suffix && !hidesuffix && !((customfield.Suffix) == \'\')">{{customfield.Suffix}}</span>',
                '</div>',
            '</div>',
        ].join('');
    }

    OCTimeFieldCtrl.$inject = ['$scope'];
    function OCTimeFieldCtrl($scope) {
        $scope.$watch('customfield', function(c) {
            if (c && c.Value == "")
                c.Value = new Date().toISOString();
        });
    }
}

function occheckboxfield() {
    var directive = {
        scope: {
            customfield : '=',
            checked: '@',
            unchecked: '@'
        },
        restrict: 'E',
        template: template
    };
    return directive;

    function template() {
        return [
            '<div class="checkbox">',
                '<label ng-class="{\'required\': customfield.Required}">{{customfield.Label || customfield.Name}}',
                    '<input type="checkbox" ng-true-value="{{checked}}" ng-false-value="{{unchecked}}" ng-model="customfield.Value">',
                '</label>',
                '</div>',
        ].join('');
    }
}

/*
 Masked Input plugin for jQuery
 Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.3.1
 */
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
