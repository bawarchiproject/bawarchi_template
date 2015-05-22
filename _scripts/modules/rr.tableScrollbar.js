/**
 * Wrap all tables in a <div class='table' />
 * Print table in PDF for mobile users (dependent on jspdf.custom.js)
 */
var RR = (function (parent, $) {
    'use strict';

    $.fn.hasHorizontalScrollBar = function() {
        return this.get(0).scrollWidth > this.width();
    };

    var wrap = function() {
        var $contentTable = $('.printableTable');

        if ( !$contentTable.length )
            return false;

        if ( !$contentTable.parent().hasClass('table') && $contentTable.parent().hasHorizontalScrollBar() ){
            $contentTable.wrap( '<div class="table"></div>' )
                .parent()
                .after('<button class="btn-print js-print-table" >Print Table</a>');

            var $btnPrint = $('.js-print-table');
            $btnPrint.on('click', function (){

                // PDF Settings to churn out jsPDF('orientation', 'unit', 'size');
                var pdf = new jsPDF('l', 'pt', 'a4');

                var source = $('.table')[0];
                var specialElementHandlers = {
                    '#bypassme': function (element, renderer) {
                        return true;
                    }
                };

                // Margins to set on the paper
                var margins = {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 20,
                    width: '100%'
                };

                // Where the magic happens
                pdf.fromHTML(
                    source,
                    margins.left,
                    margins.top, {
                        'width': margins.width,
                        'elementHandlers': specialElementHandlers
                    },
                    function (dispose) {
                        // save the pdf
                        pdf.save( $contentTable.data('title') + '.pdf');
                    },
                    margins
                );
            });
        } else {
            $('.row.container').wrap( '<div class="table no-scrollbar"></div>' );
        }
    };

    var unwrap = function (){
        var $wrappedTable = $('#content .table'),
            $btnPrint = $('.js-print-table');

        if ( $wrappedTable.length ){
            $btnPrint.off('click');

            $wrappedTable
                .find('table')
                    .unwrap()
                    .end()
                .next()
                .remove();
        }
    };

    parent.tableScrollbar = {
        wrap: wrap,
        unwrap: unwrap
    };

    return parent;

}(RR || {}, jQuery));