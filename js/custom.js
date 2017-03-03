var activity = activity || {};
$.extend(activity, {

    showAnimation: function (elem, effect) {
        var theEffect = effect ? effect : "timer";
        var theText = effect ? "" : "Cargando ...";
        elem.waitMe({
            effect: theEffect,
            text: theText,
            bg: 'rgba(255,255,255,0.7)',
            color: '#000',
            sizeW: '',
            sizeH: ''
        });
    },
    stopAnimation: function (elem) {
        elem.waitMe('hide');
    },
    showInLineError: function (elem, msg) {
        var template = "<div class='alert alert-danger alert-dismissible' role='alert'>\
                   <button type='button' class='close' data-dismiss='alert' aria-label='Cerrar'><span aria-hidden='true'>&times;</span></button>\
                   <strong>Error</strong> @error \
               </div>";
        var re = new RegExp("@error", 'g');
        var html = template.replace(re, msg);
        elem.hide();
        elem.html(html);
        elem.show("slow");
    },
    showInLineSuccess: function (elem, msg) {
        var template = "<div class='alert alert-success alert-dismissible' role='alert'>\
                   <button type='button' class='close' data-dismiss='alert' aria-label='Cerrar'><span aria-hidden='true'>&times;</span></button>\
                   @msg \
               </div>";
        var re = new RegExp("@msg", 'g');
        var html = template.replace(re, msg);
        elem.hide();
        elem.html(html);
        elem.show("slow");
    },
    removeInLineSuccess: function (elem) {
        elem.empty();
    },
    getErrorMsg: function (event) {
        try {
            if (event.status == 400 || event.status == 500) {
                var error = JSON.parse(event.responseText);
                if (error.Errors) {
                    var container = $("<div>");
                    $.each(error.Errors, function (index, value) {
                        container.append($("<div>").html(value));
                    });
                    return container.html();
                } else {
                    return error.Message;
                }
            }
            if (event.status == 403 || event.status == 401 || event.status == 404) {
                return event.statusText;
            }
            return "Error desconocido. Una alerta fue creada para los administradores del sistema";
        } catch (e) {
            return "Error desconocido. Una alerta fue creada para los administradores del sistema";
        }
    },

    _initToastrDefaults: function () {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    },
    showError: function (message) {
        this._initToastrDefaults();
        toastr['error'](message);
    },
    showSuccess: function (message) {
        this._initToastrDefaults();
        toastr['success'](message);
    },
    showInfo: function (message) {
        this._initToastrDefaults();
        toastr['info'](message);
    },
    showWarning: function(message)
    {
        this._initToastrDefaults();
        toastr['warning'](message);
    },
    goBack: function () {
        window.history.back();
    },
    resizeFormHorizontal: function () {
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (width > 992) {
            $(".form-horizontal .form-group").each(function () {
                var formGroup = $(this);
                var controlLabelHeight = formGroup.find(".control-label").height();
                var controlColumnHeight = formGroup.find(".control-column").height();
                var finalHeight = Math.max(controlLabelHeight, controlColumnHeight);
                formGroup.find(".control-label").height(finalHeight);
                formGroup.find(".control-column").height(finalHeight);
            });

        }
    },
    setDatePickerDefaults: function (imageUrl) {
        $.datepicker.setDefaults({
            dateFormat: "dd/mm/yy",
            showOn: 'both',
            buttonImageOnly: true,
            buttonImage: imageUrl,
            buttonText: 'Calendar',
            changeYear: true
        });
    }

});