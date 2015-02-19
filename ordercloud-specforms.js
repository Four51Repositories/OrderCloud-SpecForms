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
                        '<input class="form-control" placeholder="{{customfield.Label || customfield.Name}}" size="{{customfield.Width * .13}}" ng-maxlength="{{customfield.MaxLength}}" mask="{{customfield.MaskedInput}}" type="text" autocomplete="off" ng-required="{{customfield.Required}}" ng-model="customfield.Value"></input>',
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
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.0
 */
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(),
                        range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),
                        range.select());
                })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
                begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length),
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length,
                firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])),
                    null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (curVal.length < oldVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(),
                            begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),
                            end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),
                            e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText),
                            input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
                                p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1),
                            tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""),
                        clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),
                        partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos);
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent),
                    checkVal();
            });
        }
    });
});