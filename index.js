(function ( $ ) {
    $.fn.iot = function() {
        const api_endpoint = 'https://app.corrently.de/api/iot';
        let parent = this;
        this.refresh = function() {
            $.getJSON(api_endpoint+'?account='+parent.attr('data-iot'),function(d) {
               parent.html(d.result.value);
            });
        }
        this.subscribe = function(seconds) {
            setInterval(function() {
                parent.refresh();
            },(seconds*1000)+Math.round(Math.random()*1000));
        }
        this.refresh();
        if(typeof parent.attr('data-subscribe') != 'undefined') {
            this.subscribe( parent.attr('data-subscribe'));
        }
        return this;
    };
}( jQuery ));
