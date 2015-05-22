(function( $ ){
    var methods = {
        init : function( el, options ) {
            var el = el,
                settings = $.extend({
                // These are the defaults.
                position: 'bottom', // top, bottom, float
                orientation: 'l',
                unit: 'pt',
                format: 'a4',
                marginTop: 20,
                marginRight: 20,
                marginBottom: 20,
                marginLeft: 20
            }, options );

            $('body').on('click', '.js-print-table', function (){
                var pdfTitle = el.data('title');

                // PDF Settings to churn out jsPDF('orientation', 'unit', 'format');
                var pdf = new jsPDF(settings.orientation, settings.unit, settings.format);
                var source = el.parent()[0];

                // Margins to set on the paper
                var margins = {
                    top: settings.marginTop,
                    bottom: settings.marginBottom,
                    left: settings.marginLeft,
                    right: settings.marginRight,
                    width: '100%'
                };

                // Where the magic happens
                pdf.fromHTML(
                    source,
                    margins.left,
                    margins.top, {
                        'width': margins.width,
                    },
                    function (dispose) {
                        // save the pdf
                        pdf.save( pdfTitle + '.pdf');
                    },
                    margins
                );
            });

            var _position = settings.position.toLowerCase();
            switch ( _position ){
                case 'bottom':
                    return el.wrap( '<div class="table-wrapper"></div>' )
                        .parent()
                            .after('<button class="btn-print js-print-table" >Print Table</button>');
                    break;
                case 'top':
                    return el.wrap( '<div class="table-wrapper"></div>' )
                        .parent()
                            .before('<button class="btn-print js-print-table" >Print Table</button>');
                    break;
                case 'float':
                    return el.wrap( '<div class="table-wrapper"></div>' )
                        .parent().prepend('<button class="btn-print icon icon-print js-print-table" ></button>')
                        .parent().find('button').pin({
                            containerSelector: '.table-wrapper',
                            padding: { top: 45 }
                        });
                    break;
            }
        },
        destroy : function( el ) {
            $('body').unbind('click', '.js-print-table');
            el.unwrap().next().remove();
        },
        hasHorizontalScrollBar : function ( el ){
            return el.get(0).scrollWidth > el.width();
        }
    };

    $.fn.pdfTable = function( method, options ) {
        var el = this;

        switch ( method ) {
            case 'init' :
                methods.init( el, options );
                break;
            case 'hasHorizontalScrollBar':
                return methods.hasHorizontalScrollBar( el );
                break;
            case 'destroy':
                methods.destroy( el );
                break;
        }
    };
})( jQuery );