(function ($) {

    $('.yith-panel-datepicker').datepicker({
        onSelect: function (formattedDate, date, inst) {
            var monthValue = date.selectedMonth + 1,
                dayValue = date.selectedDay,
                yearValue = date.selectedYear,
                all = yearValue + "-" + monthValue + "-" + dayValue;

            $('.yith_mysql_date').val(all);
        }
    });
})(jQuery);