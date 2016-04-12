"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController(FieldService, FormService, $routeParams) {
        var vm = this;
        vm.cField = null;
        vm.eField = null;
        vm.editField = editField;
        vm.commitEdit = commitEdit;
        vm.deleteField = deleteField;
        vm.addField = addField;
        vm.reorder = reorder;
        vm.sortfield= sortField;
        vm.options =
            [
                'Single Line Text Field',
                'Multi Line Text Field',
                'Date Field',
                'Dropdown Field',
                'Checkboxes Field',
                'Radio Buttons Field'
            ];
        vm.selection = vm.options[0];
        vm.fieldOptions = null;
        var formId = "000";
        if ($routeParams.formId) {
            formId = $routeParams.formId;
        }

        var optionMap =
            [
                {key: "Single Line Text Field", value: "TEXT", label:"New Text Field",placeholder:"New Field"},
                {key: "Multi Line Text Field", value: "TEXTAREA",label:"New Text Field",placeholder:"New Field"},
                {key: "Date Field", value: "DATE",label:"New Date Field"},
                {key: "Dropdown Field", value: "OPTIONS",label:"New Dropdown",options:
                [
                    {"label": "Option 1", "value": "OPTION_1"},
                    {"label": "Option 2", "value": "OPTION_2"},
                    {"label": "Option 3", "value": "OPTION_3"}]},
                {key: "Checkboxes Field", value: "CHECKBOXES",label:"New Checkboxes","options": [
                    {"label": "Option A", "value": "OPTION_A"},
                    {"label": "Option B", "value": "OPTION_B"},
                    {"label": "Option C", "value": "OPTION_C"}
                ]},
                {key: "Radio Buttons Field", value: "RADIOS", label:"New Radio Buttons","options": [
                    {"label": "Option X", "value": "OPTION_X"},
                    {"label": "Option Y", "value": "OPTION_Y"},
                    {"label": "Option Z", "value": "OPTION_Z"}
                ]}
            ];

        function render(response) {
            vm.display = response.data;
            vm.fields = response.data;
        }

        function init() {
            FieldService
                .findFieldsByForm(formId)
                .then(render);
            FormService
                .getFormById(formId)
                .then(function (response)
                {
                    vm.form = response.data;
                })
        }
        init();

        function sendEdit(field) {
            vm.cField = null;
            FieldService
                .updateField(formId, field._id, field)
                .then(init);
        }

        function reorder() {
            vm.form.fields = vm.fields;
            FormService
                .updateFormById(formId, vm.form)
                .then(init);

        }

        function sortField(start, end) {
            FieldService
                .sortField(formId, start, end)
                .then(
                    function (response) {
                    },
                    function (err) {
                        vm.error = err;
                    }
                );
        }


        function deleteField(field) {
            vm.cField = null;
            FieldService
                .deleteField(formId, field._id)
                .then(init);
        }

        function translateFieldType(fieldType) {
            for (var k in optionMap) {
                if (optionMap[k].key == fieldType){
                    return optionMap[k].value;
                }
            }
        }

        function translateLabel(fieldType) {
            for (var k in optionMap) {
                if (optionMap[k].key == fieldType){
                    return optionMap[k].label;
                }
            }
        }
        function translatePlaceholder(fieldType) {
            for (var k in optionMap) {
                if (optionMap[k].key == fieldType){
                    return optionMap[k].placeholder;
                }
            }
        }

        function translateOptions(fieldType) {
            for (var k in optionMap) {
                if (optionMap[k].key == fieldType){
                    return optionMap[k].options;
                }
            }
        }


        function addField(fieldType) {
            var field = {"label": translateLabel(fieldType), "type": translateFieldType(fieldType), "placeholder": translatePlaceholder(fieldType), "options": translateOptions(fieldType)};
            FieldService
                .createField(formId, field)
                .then(init);
        }


        function editField(field) {
            vm.eField = field;

            var isOption = !(vm.eField.type === 'TEXT' || vm.eField.type === 'TEXTAREA');

            if (isOption) {
                var optionList = [];
                var ol = vm.eField.options;
                for (var o in ol) {
                    optionList.push(ol[o].label + ":" + ol[o].value)
                }
                vm.optionText = optionList.join("\n");
            }
        }

        function commitEdit(field) {
            vm.eField = field;

            var isOption = !(field.type == 'TEXT' || field.type == 'TEXTAREA');

            var optionArray = [];
            if (isOption) {
                var oa = vm.optionText;
                for (var o in oa) {
                    var a = oa[o].split(":");
                    optionArray.push({
                        label: a[0],
                        value: a[1]
                    });
                }
                vm.eField.options = optionArray;

            }
            else {
            }
            FieldService
                .updateField(formId, vm.eField._id, vm.eField)
                .then(init);
            vm.eField = null;
        }

    }
})();