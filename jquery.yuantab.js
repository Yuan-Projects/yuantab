;(function($){
    $.fn.yuantab = function(){
        var tabs = this.find('.tab span');
        var currentTab = this.find('.tab span.current') || tabs.eq(0);
        var tabmains = this.find('.main div');
        var currentMain = this.find('.main div.current') || tabmains.eq(0);
        
        
        tabs.on('click',function(){
            var index = $(this).index();
            currentTab.removeClass('current');
            currentMain.removeClass('current');
            currentTab = $(this);
            currentMain = tabmains.eq(index);
            currentTab.addClass('current');
            currentMain.addClass('current');
        });
        
        return this;
    };
})(jQuery);
